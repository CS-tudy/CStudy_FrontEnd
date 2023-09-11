import Container from 'components/commons/Container';
import Modal from 'components/commons/Modal';
import useModal from 'hooks/useModal';
import ConfirmModal from 'components/commons/Modal/ConfirmModal';
import RequestItem from '../RequestItem';

const RequestList = () => {
  const { modalIsOpen, toggleModal } = useModal();

  const openModal = () => {
    toggleModal();
  };

  return (
    <>
      {modalIsOpen && (
        <Modal toggleModal={toggleModal}>
          <ConfirmModal
            title="대회에 참가하시겠습니까?"
            confirmText="참가하기"
            cancelText="돌아가기"
            isOpen={modalIsOpen}
            // handleConfirm={handleConfirm}
            // handleCancel={handleCancel}
            // isLoading={isLoading}
          />
        </Modal>
      )}
      <Container>
        <button onClick={openModal}>ConfirmModal</button>
        <p>요청 게시판</p>
        <div>
          <RequestItem />
        </div>
      </Container>
    </>
  );
};

export default RequestList;
