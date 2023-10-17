import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitContest } from 'api/contest';
// import toast from 'provider/Toast';

interface useSubmitContestProps {
  contestId: string;
  handleIsLoading: (isLoading: boolean) => void;
}

export const useSubmitContest = ({
  handleIsLoading,
  contestId,
}: useSubmitContestProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: SubmitContest } = useMutation(submitContest, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      //   toast.success('답안 제출에 성공했습니다.');
      alert('답안 제출에 성공했습니다.');
      navigate(`/contest/${contestId}`, { replace: true });
    },
    onError: () => {
      //   toast.error('답안 제출에 실패했습니다.');
      alert('답안 제출에 실패했습니다.');
    },
    onSettled: () => {
      handleIsLoading(false);
    },
  });

  return SubmitContest;
};
