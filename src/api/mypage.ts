import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { MyPage } from 'types/api';

export const getMyPage = () => {
  const response = instance.get('/api/member/member');
  return response;
};

export const PwdEdit = async (formData: FieldValues) => {
  const response = await instance.put('api/member/member', formData);
  return response.data;
};
