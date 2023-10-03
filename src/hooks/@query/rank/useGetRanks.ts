import { useQuery } from '@tanstack/react-query';
import { getRanks } from 'api/rank';

export const useGetRanks = () => {
  const { data: ranks } = useQuery(['membersRanks'], getRanks);

  return ranks;
};
