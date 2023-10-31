import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import useLoginModal from 'hooks/@zustand/useLoginModal';
// import { isLogin } from 'utils/auth';
import { ProblemContent } from 'types/api';
// import StatusLabel from '../StatusLabel';
import { TBodyTd } from 'components/commons/Table/style';
import { useDispatch, useSelector } from 'react-redux';
import SolveStatus from '../SolveStatus';
import { isLogin } from 'repository/auth';
import Toast from 'libs/Toast';
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
      // Toast.error('로그인 후 이용하실 수 있습니다.');
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
