import Button from 'components/commons/Button/Button';
import Container from 'components/commons/Container';
import MiniContainer from 'components/commons/MiniContainer';
import ConfirmModal from 'components/commons/Modal/ConfirmModal';
import ContestInfo from 'components/unit/ContestDetail/ContestInfo';
import ContestRank from 'components/unit/ContestDetail/ContestRank';
import Modal from 'components/unit/Modal';
import useGetContest from 'hooks/@query/contest/useGetContest';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import useJoinContestModal from 'hooks/@redux/Contest/useJoinContestModal';
import { Contest } from 'types/api';

const ContestDetail = () => {
  const { contestId } = useParams();
  const navigate = useNavigate();
  const handleNavigateMyResult = () => {
    navigate(`/contest/1/result`);
  };

  const handleIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  const [isLoading, setIsLoading] = useState(false);

  const { modalIsOpen, handleConfirm, toggleModal } = useJoinContestModal({
    contestId,
    handleIsLoading,
  });

  return (
    <MiniContainer>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h2>자바대회</h2>
        </div>
        <div
          style={{
            marginBottom: '3rem',
          }}
        >
          <Button variant="green" size="large" onClick={handleNavigateMyResult}>
            나의 대회 결과
          </Button>
          <Button variant="primary" size="medium" onClick={toggleModal}>
            대회 참여
          </Button>
        </div>
        {modalIsOpen && (
          <Modal toggleModal={toggleModal}>
            <ConfirmModal
              title="대회에 참가하시겠습니까?"
              confirmText="참가하기"
              cancelText="돌아가기"
              // isOpen={modalIsOpen}
              handleConfirm={handleConfirm}
              handleCancel={toggleModal}
              isLoading={isLoading}
            />
          </Modal>
        )}
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <ContestInfo />
        <ContestRank />
      </div>
    </MiniContainer>
  );
};

export default ContestDetail;
