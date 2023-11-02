import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAlarm } from 'api/alarm';
import Toast from 'libs/Toast';

export const useDeleteAlarm = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries(['alarms']);
      //   queryClient.refetchQueries(['alarms']);
      Toast.success('알람이 삭제되었습니다.');
    },
    onError: () => {
      Toast.error('알람 삭제에 실패했습니다.');
    },
  });
};
