import { useMutation } from '@tanstack/react-query';
import { signOut } from 'api/auth';
import { userStorage } from 'repository/userStorage';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from 'hooks/@redux/authSlice';
import Toast from 'libs/Toast';

export const useSignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation(signOut, {
    onSuccess: () => {
      userStorage.remove();
      dispatch(logout());

      navigate('/', { replace: true });
      //   toast.success('로그아웃 되었습니다.');
      Toast.success('로그아웃 되었습니다.');
    },
    onError: () => {
      //   toast.error('로그아웃에 실패했습니다.');
      Toast.error('로그아웃에 실패했습니다.');
    },
  });
};
