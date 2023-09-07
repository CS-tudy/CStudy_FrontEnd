import axios from 'axios';
import { getUserTokens } from 'repository/auth';
import { userStorage } from 'repository/userStorage';

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
