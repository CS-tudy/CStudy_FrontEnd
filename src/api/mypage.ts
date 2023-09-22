import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { MyPage } from 'types/api';

// 내정보
export const getMyPage = async () => {
  const response = await instance.get(`api/member/member`);

  return response.data;
};

// 비밀번호변경
export const PwdEdit = async (formData: FieldValues) => {
  const response = await instance.put('api/member/member', formData);
  return response.data;
};
