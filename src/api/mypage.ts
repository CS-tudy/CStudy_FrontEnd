import { instance } from 'api';
import { MyPage } from 'types/api';

export const getMyPage = () => {
  const response = instance.get('/api/member/member');
  return response;
};
