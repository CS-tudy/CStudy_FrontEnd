import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNoticeList } from 'api/board';
import Toast from 'libs/Toast';

export const useDeleteNoticeList = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteNoticeList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['noticeList']);
      Toast.success('게시글 삭제에 성공하셨습니다.');
    },
    onError: error => {
      Toast.error(error as string);
    },
  });
};
