import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PwdEdit } from 'api/mypage';
import Toast from 'libs/Toast';

export const usePwdEdit = () => {
  const queryClient = useQueryClient();

  return useMutation(PwdEdit, {
    onSuccess: () => {
      queryClient.invalidateQueries(['PwdEdit']);
      Toast.success('비밀번호가 변경되었습니다.');
    },
    onError: error => {
      Toast.error('비밀번호가 변경에 실패했습니다.');
    },
  });
};
