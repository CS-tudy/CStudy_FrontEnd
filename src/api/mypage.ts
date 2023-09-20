import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { MyPage } from 'types/api';

export const getMyPage = async (): Promise<MyPage> => {
  const response = await instance.get(`/api/mypage`);
  return response.data;
};

export const PwdEdit = async (formData: FieldValues) => {
  const response = await instance.put('api/member/member', formData);
  return response.data;
};
