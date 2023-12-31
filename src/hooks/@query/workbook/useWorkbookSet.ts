import { useMutation, useQueryClient } from '@tanstack/react-query';
import { workbookSet } from 'api/workbook';
import Toast from 'libs/Toast';

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
      Toast.success('문제집 생성에 성공했습니다.');
      handleIsModal(true);
    },
    onError: () => {
      Toast.error('문제집 생성에 실패했습니다.');
    },
    onSettled: () => {
      handleIsLoading(false);
    },
  });

  return WorkbookSet;
};
