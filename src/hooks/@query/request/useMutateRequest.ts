import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRequest, deleteRequest, editRequest } from 'api/request';
import { useNavigate } from 'react-router-dom';
// import toast from 'provider/Toast';

// 작성
export const useCreateRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(createRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(['requestList']);
      //   toast.success('글이 등록되었습니다.');
      alert('글이 등록되었습니다.');
      navigate('/request');
      window.scrollTo(0, 0);
    },
    onError: () => {
      //   toast.error('글 등록에 실패했습니다.');
      alert('글 등록에 실패했습니다.');
      navigate('/request');
    },
  });
};

// 수정
export const useEditRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(editRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(['requestList']);
      //   toast.success('글이 등록되었습니다.');
      alert('글이 수정되었습니다.');
      navigate('/request');
      window.scrollTo(0, 0);
    },
    onError: () => {
      //   toast.error('글 등록에 실패했습니다.');
      alert('글 수정에 실패했습니다.');
    },
  });
};

// 삭제
export const useDeleteRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(deleteRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(['requestList']);
      //   toast.success('글이 등록되었습니다.');
      alert('글이 삭제되었습니다.');
      navigate('/request');
      window.scrollTo(0, 0);
    },
    onError: () => {
      //   toast.error('글 등록에 실패했습니다.');
      alert('글 삭제에 실패했습니다.');
    },
  });
};
