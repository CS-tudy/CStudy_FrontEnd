import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCommentList } from 'api/comment';

export const useDeleteCommentList = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCommentList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['commentList']);
      //   toast.success('공지사항 게시글 생성에 성공했습니다');
      alert('댓글 삭제에 성공하셨습니다.');
    },
    onError: error => {
      //   toast.error(error as string);
      alert(error as string);
    },
  });
};
