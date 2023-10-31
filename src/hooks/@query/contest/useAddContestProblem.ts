import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addContestProblem } from 'api/contest';
import Toast from 'libs/Toast';

interface useAddContestProblemProps {
  handleIsLoading: (isLoading: boolean) => void;
}

export const useAddContestProblem = ({
  handleIsLoading,
}: useAddContestProblemProps) => {
  const queryClient = useQueryClient();

  const { mutate: AddContestProblem } = useMutation(addContestProblem, {
    onSuccess: () => {
      Toast.success('대회 문제 추가에 성공했습니다.');
      queryClient.invalidateQueries(['contestProblem']);
    },
    onError: () => {
      Toast.error(' 대회 문제 추가에 실패했습니다.');
    },
    onSettled: () => {
      handleIsLoading(false);
    },
  });

  return AddContestProblem;
};
