import { useMutation, useQueryClient } from '@tanstack/react-query';
import { approveRequest } from 'api/request';
// import toast from 'provider/Toast';

export const useApproveRequest = () => {
  const queryClient = useQueryClient();
  const { mutate: ApproveRequest } = useMutation(approveRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(['request']);
      queryClient.invalidateQueries(['requestList']);
      // toast.success('글이 승인되었습니다.');
      alert('글이 승인되었습니다.');
    },
    onError: () => {
      // toast.error('글 승인에 실패했습니다.');
      alert('글 승인에 실패했습니다.');
    },
  });

  return ApproveRequest;
};
