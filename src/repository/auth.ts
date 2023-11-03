import { jwtDecodeProps } from 'types/repository';
import { userStorage } from './userStorage';
import jwtDecode from 'jwt-decode';
import { redirect } from 'react-router-dom';

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

  const { memberId, roles }: jwtDecodeProps = jwtDecode(userToken.accessToken);

  return { memberId, roles };
};

export const isAdmin = () => {
  const userToken = userStorage.get();
  if (!userToken) {
    return false;
  }
  const { roles }: jwtDecodeProps = jwtDecode(userToken.accessToken);

  if (roles[0] === 'ROLE_ADMIN') return true;
  return false;
};

export const checkAuthLoader = async () => {
  const userToken = userStorage.get();

  if (!userToken) return redirect('/forbidden');

  return true;
};

export const checkAdminLoader = () => {
  if (!isAdmin()) return false;

  return true;
};
