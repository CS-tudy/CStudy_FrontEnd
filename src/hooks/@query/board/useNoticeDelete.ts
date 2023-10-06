import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNoticeList } from 'api/board';

export const useDeleteNoticeList = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteNoticeList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['noticeList']);
      alert('게시글 삭제에 성공하셨습니다.');
    },
    onError: error => {
      alert(error as string);
    },
  });
};
