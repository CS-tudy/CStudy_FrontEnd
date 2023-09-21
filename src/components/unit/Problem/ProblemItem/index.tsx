import { useCallback } from 'react';
import { Link } from 'react-router-dom';
// import useLoginModal from 'hooks/@zustand/useLoginModal';
// import { isLogin } from 'utils/auth';
import { ProblemContent } from 'types/api';
// import StatusLabel from '../StatusLabel';
import { TBodyTd } from 'components/commons/Table/style';

interface ProblemItemProps {
  problem: ProblemContent;
}

const ProblemItem = ({ problem }: ProblemItemProps) => {
  // const { questionId, status, questionTitle, categoryTitle } = problem;
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
  return (
    <tr>
      <TBodyTd>{/* {questionId} */}1</TBodyTd>
      <TBodyTd>X</TBodyTd>
      <TBodyTd className="title">
        {/* <Link to={`${questionId}`} onClick={checkAndDisplayLoginModal}> */}
        {/* {questionTitle} */}
        자바 관련 문제
        {/* </Link> */}
      </TBodyTd>
      <TBodyTd>
        {/* {categoryTitle} */}
        자바
      </TBodyTd>
    </tr>
  );
};

export default ProblemItem;
