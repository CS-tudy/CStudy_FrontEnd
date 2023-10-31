import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitContest } from 'api/contest';
import Toast from 'libs/Toast';
// import toast from 'provider/Toast';

interface useSubmitContestProps {
  competitionId: string;
  handleIsLoading: (isLoading: boolean) => void;
}

export const useSubmitContest = ({
  handleIsLoading,
  competitionId,
}: useSubmitContestProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: SubmitContest } = useMutation(submitContest, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      Toast.success('답안 제출에 성공했습니다.');
      navigate(`/contest/${competitionId}`, { replace: true });
    },
    onError: () => {
      Toast.error('답안 제출에 실패했습니다.');
    },
    onSettled: () => {
      handleIsLoading(false);
    },
  });

  return SubmitContest;
};
