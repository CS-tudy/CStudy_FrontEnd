import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addWorkbookQuestion } from 'api/workbook';
import Toast from 'libs/Toast';
import { useNavigate } from 'react-router-dom';

interface AddWorkbookQuestionProps {
  handleIsLoading: (isLoading: boolean) => void;
}

export const useAddWorkbookQuestion = ({
  handleIsLoading,
}: AddWorkbookQuestionProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: AddWorkbookQuestion } = useMutation(addWorkbookQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries(['workbookQuestion']);
      Toast.success('문제집 문제 추가에 성공했습니다.');
      navigate(-1);
    },
    onError: () => {
      Toast.error('문제집 문제 추가에 실패했습니다.');
    },
    onSettled: () => {
      handleIsLoading(false);
    },
  });

  return AddWorkbookQuestion;
};
