import { useMutation } from '@tanstack/react-query';
import { signUp } from 'api/auth';

export const useSignUp = () => {
  return useMutation(signUp, {
    onSuccess: () => {
      // toast.success('회원가입 되었습니다.');
      // closeSignUpModal();
      alert('회원가입 성공');
    },
    onError: () => {
      // toast.error('회원가입에 실패했습니다.');
      alert('회원가입 실패');
    },
  });
};
