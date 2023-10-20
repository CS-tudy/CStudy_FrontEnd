import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PwdEdit } from 'api/mypage';

export const usePwdEdit = () => {
  const queryClient = useQueryClient();

  return useMutation(PwdEdit, {
    onSuccess: () => {
      queryClient.invalidateQueries(['PwdEdit']);
      alert('비밀번호가 변경되었습니다.');
    },
    onError: error => {
      console.log(error);
      alert(error as string);
    },
  });
};
