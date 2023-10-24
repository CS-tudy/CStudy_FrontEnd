import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ImgUpload } from 'api/mypage';
import Toast from 'libs/Toast';

export const useUploadImg = () => {
  const queryClient = useQueryClient();

  return useMutation(ImgUpload, {
    onSuccess: () => {
      queryClient.invalidateQueries(['ImgUpload']);
      Toast.success('이미지 업로드가 완료되었습니다.');
    },
    onError: error => {
      Toast.error('이미지 업로드가 실패했습니다.');
    },
  });
};
