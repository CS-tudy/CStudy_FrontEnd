import { useMutation, useQueryClient } from '@tanstack/react-query';
import { workbookSet } from 'api/workbook';

interface useWorkbookSetProps {
  handleIsLoading: (isLoading: boolean) => void;
  handleIsModal: (isModalOpen: boolean) => void;
}

export const useWorkbookSet = ({
  handleIsLoading,
  handleIsModal,
}: useWorkbookSetProps) => {
  const queryClient = useQueryClient();
  const { mutate: WorkbookSet } = useMutation(workbookSet, {
    onSuccess: () => {
      queryClient.invalidateQueries(['woorkbookList']);
      alert('문제집 생성에 성공했습니다.');
    },
    onError: () => {
      alert('문제집 생성에 실패했습니다.');
    },
    onSettled: () => {
      handleIsLoading(false);
      handleIsModal(true);
    },
  });

  return WorkbookSet;
};
