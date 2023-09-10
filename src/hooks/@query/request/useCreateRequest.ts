import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRequest } from 'api/request';
import { useNavigate } from 'react-router-dom';
// import toast from 'provider/Toast';

export const useCreateRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(createRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(['requestList']);
      //   toast.success('글이 등록되었습니다.');
      alert('글이 등록되었습니다.');
      navigate('/board');
      window.scrollTo(0, 0);
    },
    onError: () => {
      //   toast.error('글 등록에 실패했습니다.');
      alert('글 등록에 실패했습니다.');
    },
  });
};
