import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ImgUpload } from 'api/mypage';

export const useUploadImg = () => {
  const queryClient = useQueryClient();

  return useMutation(ImgUpload, {
    onSuccess: () => {
      queryClient.invalidateQueries(['ImgUpload']);
      alert('이미지 업로드가 완료되었습니다.');
    },
    onError: error => {
      alert(error as string);
    },
  });
};
