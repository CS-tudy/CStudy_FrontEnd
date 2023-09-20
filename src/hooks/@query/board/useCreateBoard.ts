import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBoardList } from 'api/board';
import { AddboardListForm } from 'types/api';

export const useAddBoardList = () => {
  const queryClient = useQueryClient();
  return useMutation(addBoardList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['boardList']);
      //   toast.success('공지사항 게시글 생성에 성공했습니다');
      alert('공지사항 게시글 생성에 성공했습니다');
    },
    onError: error => {
      //   toast.error(error as string);
      alert(error as string);
    },
  });
};
