import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCommentList } from 'api/comment';
import Toast from 'libs/Toast';

export const useDeleteCommentList = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCommentList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['commentList']);
      Toast.success('댓글 삭제에 성공 하셨습니다.');
    },
    onError: error => {
      Toast.error('댓글 삭제에 실패 하셨습니다.');
    },
  });
};
