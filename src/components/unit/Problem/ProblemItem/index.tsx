import { Link, useNavigate } from 'react-router-dom';
import { ProblemContent } from 'types/api';
import { TBodyTd } from 'components/commons/Table/style';
import { useDispatch } from 'react-redux';
import SolveStatus from '../SolveStatus';
import { isLogin } from 'repository/auth';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';

interface ProblemItemProps {
  problem: ProblemContent;
}

const ProblemItem = ({ problem }: ProblemItemProps) => {
  const { questionId, status, questionTitle, categoryTitle } = problem;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkLogin = (e: React.MouseEvent) => {
    if (!isLogin()) {
      e.preventDefault();
      dispatch(Logintoggle());
      navigate('/problem');
    }
  };

  return (
    <tr>
      <TBodyTd>{questionId}</TBodyTd>
      <TBodyTd>
        <SolveStatus status={status} />
      </TBodyTd>
      <TBodyTd className="title">
        <Link to={`${questionId}`} onClick={checkLogin}>
          {questionTitle}
        </Link>
      </TBodyTd>
      <TBodyTd>{categoryTitle}</TBodyTd>
    </tr>
  );
};

export default ProblemItem;
