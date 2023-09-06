import axios from 'axios';
import { getUserTokens } from 'repository/auth';
import { userStorage } from 'repository/userStorage';

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

instance.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전 수행할 일
    const tokens = getUserTokens();
    if (tokens) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    }

    return config;
  },
  (error) => {
    // 오류 요청을 보내기전 수행할 일
    return Promise.reject(error);
  },
);
