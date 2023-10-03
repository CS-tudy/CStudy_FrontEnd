import { userStorage } from './userStorage';
import jwtDecode from 'jwt-decode';
import { jwtDecodeProps } from 'types/repo';

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

export const userInfo = () => {
  const userToken = userStorage.get();
  if (!userToken) {
    return null;
  }

  // const { memberId, roles }: jwtDecodeProps = jwtDecode(userToken.accessToken);

  // return { memberId, roles };

  const member = jwtDecode(userToken.accessToken);
  return member;
};
