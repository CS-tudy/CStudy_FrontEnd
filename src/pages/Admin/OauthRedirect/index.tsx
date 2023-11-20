import { instance } from 'api';
import { login } from 'hooks/@redux/authSlice';
import Cookies from 'js-cookie';
import Toast from 'libs/Toast';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userStorage } from 'repository/userStorage';

const OAuthRedirect = async () => {
  const dispatch = useDispatch();

  // const accessToken = Cookies.get('accessToken');
  // const refreshToken = Cookies.get('refreshToken');
  const response = await instance.get('/oauth2/login');
  const cookies = response.headers['set-cookie'];
  const cookies1 = response.headers['accessToken'];
  const cookies2 = response.headers['refreshToken'];
  console.log('1', cookies);
  console.log('2', cookies1);
  console.log('3', cookies2);

  // if (!accessToken || !refreshToken)
  //   return Toast.error('로그인에 실패했습니다.');

  // userStorage.set({
  //   accessToken,
  //   refreshToken,
  // });

  dispatch(login());

  window.location.replace(`https://cstudying.site`);

  return <div>Login...</div>;
};

export default OAuthRedirect;
