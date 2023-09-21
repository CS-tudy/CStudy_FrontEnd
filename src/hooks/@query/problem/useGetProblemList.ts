import { useQuery } from '@tanstack/react-query';
import { getProblemList } from 'api/problem';

interface UseGetProblemListProps {
  questionTitle?: string;
  categoryTitle?: string;
  status?: number;
  memberId?: number;
  page?: number;
  query?: string;
}

export const useGetProblemList = ({
  questionTitle,
  categoryTitle,
  status,
  memberId,
  page,
  query,
}: UseGetProblemListProps) => {
  const { data: problemList } = useQuery(
    [
      'getProblem',
      { questionTitle, categoryTitle, status, memberId, page, query },
    ],
    () =>
      getProblemList({
        questionTitle,
        categoryTitle,
        memberId,
        status,
        page,
        query,
      }),
    { keepPreviousData: true },
  );

  return problemList;
};
