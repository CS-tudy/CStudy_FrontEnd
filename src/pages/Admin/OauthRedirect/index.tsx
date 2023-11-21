import Toast from 'libs/Toast';
import { useEffect } from 'react';
import { userStorage } from 'repository/userStorage';

const OAuthRedirect = () => {
  useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const accessToken = parsedUrl.searchParams.get('accessToken');
    const refreshToken = parsedUrl.searchParams.get('refreshToken');

    if (!accessToken || !refreshToken)
      return Toast.error('로그인에 실패했습니다.');

    userStorage.set({
      accessToken,
      refreshToken,
    });

    window.location.replace(`https://cstudying.site`);
  }, []);
  return <div>Login...</div>;
};

export default OAuthRedirect;
