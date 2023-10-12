import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateWorkbook, uploadimageWorkbook } from 'api/workbook';

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

      alert('이미지 저장에 성공했습니다.');
    },
    onError: () => {
      alert('이미지 저장에 실패했습니다.');
    },
    onSettled: () => {
      handleIsModal(false);
    },
  });

  return useUploadImgWorkbook;
};
