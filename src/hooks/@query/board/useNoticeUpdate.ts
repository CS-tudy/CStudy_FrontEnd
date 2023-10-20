import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateNoticeList } from 'api/board';
import Toast from 'libs/Toast';

interface UpdateNoticeProps {
  id: number;
  handleIsActive: (isActive: boolean) => void;
}
export const useUpdateNoticeList = ({ handleIsActive }: UpdateNoticeProps) => {
  const queryClient = useQueryClient();
  const { mutate: UpdateNotice } = useMutation(updateNoticeList, {
    onSuccess: () => {
      Toast.success(' 게시글 수정에 성공했습니다.');
      queryClient.invalidateQueries(['noticeList']);
    },
    onError: () => {
      Toast.error('게시글 수정에 실패했습니다.');
    },
    onSettled: () => {
      handleIsActive(false);
    },
  });
  return UpdateNotice;
};
