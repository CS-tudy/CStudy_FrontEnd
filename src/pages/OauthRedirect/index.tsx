import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OAuthRedirect = () => {
  console.log('테스트');
  const params = useParams();
  useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const accessToken = parsedUrl.searchParams.get('accessToken');
    const refreshToken = parsedUrl.searchParams.get('refreshToken');
    if (!accessToken || !refreshToken) return alert('로그인 실패');

    //  console.log(accessToken);
    //  console.log(refreshToken);

    window.location.replace(`http://localhost:3000`);
    localStorage.clear();
    localStorage.setItem('token', accessToken as string);
    //  window.location.replace('/');
  }, []);

  return <div>Login...</div>;
};

export default OAuthRedirect;
