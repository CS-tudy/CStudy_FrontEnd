import { login } from 'hooks/@redux/authSlice';
import Cookies from 'js-cookie';
import Toast from 'libs/Toast';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userStorage } from 'repository/userStorage';

const OAuthRedirect = () => {
  const dispatch = useDispatch();

  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');

  if (!accessToken || !refreshToken)
    return Toast.error('로그인에 실패했습니다.');

  userStorage.set({
    accessToken,
    refreshToken,
  });

  dispatch(login());

  window.location.replace(`https://cstudying.site`);

  return <div>Login...</div>;
};

export default OAuthRedirect;
