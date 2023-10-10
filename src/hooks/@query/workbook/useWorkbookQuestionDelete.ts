import { useMutation, useQueryClient } from '@tanstack/react-query';
import { workbookQuestionDelete } from 'api/workbook';

interface WorkbookQuestionDeleteProps {
  handleIsLoading: (isLoading: boolean) => void;
}

export const useWorkbookQuestionDelete = ({
  handleIsLoading,
}: WorkbookQuestionDeleteProps) => {
  const queryClient = useQueryClient();
  const { mutate: WorkbookQuestionDelete } = useMutation(
    workbookQuestionDelete,
    {
      onSuccess: () => {
        alert('문제집 문제 삭제에 성공했습니다.');
        queryClient.invalidateQueries(['workbookQuestion']);
      },
      onError: () => {
        alert('문제집 문제 삭제에 실패했습니다.');
      },
      onSettled: () => {
        handleIsLoading(false);
      },
    },
  );

  return WorkbookQuestionDelete;
};
