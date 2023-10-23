import { useMutation, useQueryClient } from '@tanstack/react-query';
import { workbookQuestionDelete } from 'api/workbook';
import Toast from 'libs/Toast';

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
        Toast.success('문제집 문제 삭제에 성공했습니다.');
        queryClient.invalidateQueries(['workbookQuestion']);
      },
      onError: () => {
        Toast.error('문제집 문제 삭제에 실패했습니다.');
      },
      onSettled: () => {
        handleIsLoading(false);
      },
    },
  );

  return WorkbookQuestionDelete;
};
