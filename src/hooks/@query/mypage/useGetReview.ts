import { useQuery } from '@tanstack/react-query';
import { getReview } from 'api/mypage';

export const useGetReview = () => {
  const { data: review } = useQuery(['getReview'], () => getReview());

  return review;
};
