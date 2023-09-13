import Container from 'components/commons/Container';
import Modal from 'components/unit/Modal';
import useModal from 'hooks/useModal';
import SignModal from 'components/commons/Modal/SignModal';
import ConfirmModal from 'components/commons/Modal/ConfirmModal';

const BoardList = () => {
  const { modalIsOpen, toggleModal } = useModal();

  const openModal = () => {
    toggleModal();
  };

  return (
    <>
      {modalIsOpen && (
        <Modal toggleModal={toggleModal}>
          <SignModal toggleModal={toggleModal}>
            <div>test</div>
          </SignModal>
        </Modal>
      )}
      <Container>
        <div>
          <button onClick={openModal}>SignModal</button>
          <p>보드 게시판</p>
        </div>
      </Container>
    </>
  );
};

export default BoardList;
