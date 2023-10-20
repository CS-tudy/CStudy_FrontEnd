import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateWorkbook, uploadimageWorkbook } from 'api/workbook';
import Toast from 'libs/Toast';

interface UploadImgWorkbookProps {
  handleIsModal: (isModalOpen: boolean) => void;
}

export const useUploadImgWorkbook = ({
  handleIsModal,
}: UploadImgWorkbookProps) => {
  const queryClient = useQueryClient();
  const { mutate: useUploadImgWorkbook } = useMutation(uploadimageWorkbook, {
    onSuccess: () => {
      queryClient.invalidateQueries(['workbookimage']);
      Toast.success('이미지 저장에 성공했습니다.');
    },
    onError: () => {
      Toast.success('이미지 저장에 실패했습니다.');
    },
    onSettled: () => {
      handleIsModal(false);
    },
  });

  return useUploadImgWorkbook;
};
