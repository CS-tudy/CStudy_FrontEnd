import { IProblem } from 'types/api';
import ProblemItem from '../ProblemItem';

interface problemListProps {
  problemList: IProblem;
}

const ProblemList = ({ problemList }: problemListProps) => {
  return (
    <>
      {problemList?.content?.map(problem => {
        return <ProblemItem key={problem.questionId} problem={problem} />;
      })}
    </>
  );
};

export default ProblemList;
