import { userStorage } from './userStorage';

export const getUserTokens = () => {
  const userTokens = userStorage.get();
  if (!userTokens) return null;

  const { accessToken, refreshToken } = userTokens;
  return { accessToken, refreshToken };
};

export const isLogin = () => {
  const user = userStorage.get();
  if (!user) return false;

  const { accessToken } = user;
  return !!accessToken;
};
