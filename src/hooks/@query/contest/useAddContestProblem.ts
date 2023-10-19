import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addContestProblem } from 'api/contest';
// import toast from 'provider/Toast';

interface useAddContestProblemProps {
  handleIsLoading: (isLoading: boolean) => void;
}

export const useAddContestProblem = ({
  handleIsLoading,
}: useAddContestProblemProps) => {
  const queryClient = useQueryClient();

  const { mutate: AddContestProblem } = useMutation(addContestProblem, {
    onSuccess: () => {
      //   toast.success('문제 추가에 성공했습니다.');
      alert('문제 추가에 성공했습니다.');
      queryClient.invalidateQueries(['contestProblem']);
    },
    onError: () => {
      //   toast.error('문제 추가에 실패했습니다.');
      alert('문제 추가에 실패했습니다.');
    },
    onSettled: () => {
      handleIsLoading(false);
    },
  });

  return AddContestProblem;
};
