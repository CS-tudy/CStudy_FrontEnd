import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCommentList } from 'api/comment';
import { useDispatch } from 'react-redux';
import { toggleReplying } from 'hooks/@redux/comment';

export const useAddCommentList = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  return useMutation(addCommentList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['commentList']);
      dispatch(toggleReplying(''));
      //   toast.success('공지사항 게시글 생성에 성공했습니다');
      alert('댓글 생성되었습니다.');
    },
    onError: error => {
      //   toast.error(error as string);
      alert(error as string);
    },
  });
};
