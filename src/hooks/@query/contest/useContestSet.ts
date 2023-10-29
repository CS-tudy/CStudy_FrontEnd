import { useMutation, useQueryClient } from '@tanstack/react-query';
import { contestSet } from 'api/contest';
import Toast from 'libs/Toast';

export const useContestSet = () => {
  const queryClient = useQueryClient();
  return useMutation(contestSet, {
    onSuccess: () => {
      queryClient.invalidateQueries(['contestList']);
      Toast.success('대회 생성에 성공했습니다');
    },
    onError: error => {
      Toast.error('대회 생성에 실패했습니다.');
    },
  });
};
