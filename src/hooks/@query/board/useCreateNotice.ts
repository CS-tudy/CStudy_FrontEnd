import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBoardList } from 'api/board';
import Toast from 'libs/Toast';
import { useNavigate } from 'react-router-dom';
import { AddboardListForm } from 'types/api';

export const useAddNoticeList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(addBoardList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['noticeList']);
      Toast.success('공지사항 게시글 생성에 성공했습니다');
      navigate(-1);
    },
    onError: error => {
      Toast.error(error as string);
    },
  });
};
