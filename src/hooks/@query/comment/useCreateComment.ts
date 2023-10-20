import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCommentList } from 'api/comment';
import useReplyButton from 'hooks/Comment/useReplyButton';
import Toast from 'libs/Toast';

export const useAddCommentList = () => {
  const queryClient = useQueryClient();
  const { toggleReplyingHandler } = useReplyButton();

  return useMutation(addCommentList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['commentList']);
      toggleReplyingHandler('');
      Toast.success('댓글 생성되었습니다.');
    },
    onError: error => {
      Toast.error('댓글 생성 실패하였습니다.');
    },
  });
};
