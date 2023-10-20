import { useQuery } from '@tanstack/react-query';
import { ApprovalStatus } from 'api/mypage';

export const useGetStatus = () => {
  const { data: status } = useQuery(['getStatus'], () => ApprovalStatus());

  return status;
};
