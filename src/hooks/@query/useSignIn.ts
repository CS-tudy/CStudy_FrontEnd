import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn } from 'api/auth';
import { userStorage } from 'repository/userStorage';
import { useDispatch } from 'react-redux';
import { login } from 'hooks/@redux/authSlice';
import { useNavigate } from 'react-router-dom';
import Toast from 'libs/Toast';

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation(signIn, {
    onSuccess: response => {
      queryClient.invalidateQueries();
      userStorage.set({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      });
      dispatch(login());
      Toast.success('로그인 되었습니다.');
      const get = userStorage.get();
      if (get) {
        if (response.name === '관리자') {
          navigate('/admin/CreateProblem');
        }
      }
    },
    onError: () => {
      Toast.error('로그인에 실패했습니다.');
    },
  });
};
