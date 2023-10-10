import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateWorkbook } from 'api/workbook';

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
      alert('문제집 정보 수정에 성공했습니다.');
      queryClient.invalidateQueries(['workbook']);
    },
    onError: () => {
      alert('문제집 정보 수정에 실패했습니다.');
    },
    onSettled: () => {
      handleIsActive(false);
      handleIsLoading(false);
    },
  });

  return UpdateWorkbook;
};
