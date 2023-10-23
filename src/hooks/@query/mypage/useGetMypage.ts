import { useQuery } from '@tanstack/react-query';
import { getMyPage } from 'api/mypage';

export const useGetMypage = () => {
  const { data: info } = useQuery(['getMypage'], () => getMyPage());

  return info;
};
