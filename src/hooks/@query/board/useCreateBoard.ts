import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBoardList } from 'api/board';
import Toast from 'libs/Toast';
import { AddboardListForm } from 'types/api';

export const useAddBoardList = () => {
  const queryClient = useQueryClient();
  return useMutation(addBoardList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['noticeList']);
      Toast.success('공지사항 게시글 생성에 성공했습니다');
    },
    onError: error => {
      Toast.error(error as string);
    },
  });
};
