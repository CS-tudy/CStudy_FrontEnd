import axios from 'axios';
import { getUserTokens } from 'repository/auth';
import { userStorage } from 'repository/userStorage';
import { retryToken } from './auth';

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

instance.interceptors.request.use(
  config => {
    const tokens = getUserTokens();
    if (tokens) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const { config, response } = error;
    console.log(config);
    console.log(config.headers.Authorization);
    console.log(response);
    console.log(response.status);
    // if (response.status == 401 && response.data.message == 'Token expired')
    // TODO: 토큰 만료 체크 개선
    if (response.status == 401) {
      // 401(Unauthorized): 클라이언트가 인증되지 않았기 때문에 요청을 정상적으로 처리할 수 없음
      const originalRequest = config;
      const tokens = getUserTokens();

      if (!tokens) {
        return window.location.replace('/');
      }

      try {
        // AccessToken 만료 후 인가 요청
        // tokens 없는 상태 아닌 인가 에러
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          await retryToken(tokens.refreshToken);
        // RefreshToken으로 AccessToken 재발급 요청

        const newUser = {
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        };

        userStorage.set(newUser);
        // 발급 받은 AccessToken을 state에 재저장

        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
        // 방금 실패했던(error) API 재요청
      } catch (error) {
        userStorage.remove();
        return window.location.replace('/');
      }
    }

    if (error.response.status == 403) {
      // 403(Forbidden): 클라이언트가 해당 요청에 대한 권한이 없음
      throw new Error('접근 권한이 없습니다.');
    }

    throw error.response.status;
    // throw error.response.error;
    // TODO: 예외 처리 개선
  },
);
