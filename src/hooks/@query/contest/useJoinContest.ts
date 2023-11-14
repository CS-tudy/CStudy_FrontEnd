import { useMutation, useQueryClient } from '@tanstack/react-query';
import { joinContest } from 'api/contest';
import Toast from 'libs/Toast';
import { useNavigate } from 'react-router-dom';
import { UseJoinContestProps } from 'types/contest';

export const useJoinContest = ({
  handleIsLoading,
  setModalIsOpen,
}: UseJoinContestProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: JoinContest } = useMutation(joinContest, {
    onSuccess: () => {
      navigate('contestproblem');
      queryClient.invalidateQueries();
      Toast.success('대회 참여에 성공했습니다.');
    },
    onError: error => {
      switch (error) {
        case '5001':
          Toast.error('대회 정보를 찾을 수 없습니다.');
          break;
        case '5002':
          Toast.error('해당 대회에 등록한 회원이 없습니다.');
          break;
        case '5003':
          Toast.error('참여가능한 인원이 초과되었습니다.');
          break;
        case '5004':
          Toast.error('대회에 이미 참여한 인원입니다.');
          break;
        default:
          Toast.error('대회 참여에 실패했습니다.');
          break;
      }
    },
    onSettled: () => {
      handleIsLoading(false);
      setModalIsOpen(false);
    },
  });

  return JoinContest;
};
