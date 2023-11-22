import { useQuery } from '@tanstack/react-query';
import { getMyRank } from 'api/rank';

export const useGetMyRank = () => {
  const { data: myrank } = useQuery(['getMyrank'], () => getMyRank());

  return myrank;
};
