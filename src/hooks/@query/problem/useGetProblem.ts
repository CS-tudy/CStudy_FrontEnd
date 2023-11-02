import { useQuery } from '@tanstack/react-query';
import { getProblem } from 'api/problem';

export const useGetProblem = (problemId: string) => {
  const { data: problem } = useQuery(['getProblem', { problemId }], () =>
    getProblem(problemId),
  );
  return problem;
};

export default useGetProblem;
