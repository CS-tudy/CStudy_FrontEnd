import { instance } from 'api';
import { SignUpForm } from 'types/Form';

// 회원가입
export const signUp = async (formData: SignUpForm) => {
  const response = await instance.post('/api/signup', formData);
  return response.data;
};

// 이메일 중복 체크
export const emailCheck = () => {
  return;
};
