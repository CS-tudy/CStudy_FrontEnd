import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateWorkbook } from 'api/workbook';
import Toast from 'libs/Toast';

interface UpdateWorkbookProps {
  handleIsLoading: (isLoading: boolean) => void;
  handleIsActive: (isActive: boolean) => void;
}

export const useUpdateWorkbook = ({
  handleIsLoading,
  handleIsActive,
}: UpdateWorkbookProps) => {
  const queryClient = useQueryClient();
  const { mutate: UpdateWorkbook } = useMutation(updateWorkbook, {
    onSuccess: () => {
      Toast.success('문제집 정보 수정에 성공했습니다.');
      queryClient.invalidateQueries(['workbook']);
    },
    onError: () => {
      Toast.error('문제집 정보 수정에 실패했습니다.');
    },
    onSettled: () => {
      handleIsActive(false);
      handleIsLoading(false);
    },
  });

  return UpdateWorkbook;
};
