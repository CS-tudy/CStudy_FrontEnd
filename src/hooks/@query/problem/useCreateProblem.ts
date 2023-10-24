import { useMutation, useQueryClient } from '@tanstack/react-query';
import { problemSet } from 'api/problem';
import Toast from 'libs/Toast';

export const useCreateProblem = () => {
  const queryClient = useQueryClient();

  return useMutation(problemSet, {
    onSuccess: () => {
      queryClient.invalidateQueries(['problemSet']);
      Toast.success('문제생성이 완료되었습니다');
    },
    onError: error => {
      Toast.error('문제생성이 실패했습니다');
    },
  });
};
