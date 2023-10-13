import { memo } from 'react';
import { IProblem } from 'types/api';
// import ProgramFilterTBodyList from '../ProgramFilterTBodyList';
import ProblemItem from '../ProblemItem';
import NoData from 'components/commons/NoData';

interface problemListProps {
  problemList: IProblem;
}

const ProblemList = ({ problemList }: problemListProps) => {
  console.log('problemlist', problemList);
  return (
    <>
      {problemList?.totalElements === 0 && (
        <tr>
          <td colSpan={4}>
            <NoData>문제풀이 문제가 없습니다.</NoData>
          </td>
        </tr>
      )}
      {problemList?.content?.map(problem => (
        <ProblemItem key={problem.questionId} problem={problem} />
      ))}
    </>
  );
};

export default ProblemList;
