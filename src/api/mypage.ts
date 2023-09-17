import { instance } from 'api';
import { MyPage } from 'types/api';

export const getMyPage = async (): Promise<MyPage> => {
  const response = await instance.get(`/api/mypage`);
  return response.data;
};
