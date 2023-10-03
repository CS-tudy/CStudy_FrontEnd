import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCommentList } from 'api/comment';
import useReplyButton from 'hooks/Comment/useReplyButton';

export const useAddCommentList = () => {
  const queryClient = useQueryClient();
  const { toggleReplyingHandler } = useReplyButton();

  return useMutation(addCommentList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['commentList']);
      // toast.success('공지사항 게시글 생성에 성공했습니다');
      toggleReplyingHandler('');
      alert('댓글 생성되었습니다.');
    },
    onError: error => {
      // toast.error(error as string);
      alert(error as string);
    },
  });
};
