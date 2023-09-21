import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import useLoginModal from 'hooks/@zustand/useLoginModal';
// import { isLogin } from 'utils/auth';
import { ProblemContent } from 'types/api';
// import StatusLabel from '../StatusLabel';
import { TBodyTd } from 'components/commons/Table/style';
import { useSelector } from 'react-redux';
import SolveStatus from '../SolveStatus';

interface ProblemItemProps {
  problem: ProblemContent;
}

const ProblemItem = ({ problem }: ProblemItemProps) => {
  const { questionId, status, questionTitle, categoryTitle } = problem;

  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: any) => state.persistedReducer.auth.isAuthenticated,
  );
  // const loginModal = useLoginModal();

  // const checkAndDisplayLoginModal = useCallback(
  //     (e: React.MouseEvent) => {
  //         if (!isLogin()) {
  //             e.preventDefault();
  //             loginModal.onOpen();
  //         }
  //     },
  //     [loginModal],
  // );

  const checkLogin = () => {
    if (!isAuthenticated) {
      alert('로그인 후 이용하실 수 있습니다.');
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
