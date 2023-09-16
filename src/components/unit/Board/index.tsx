import Container from 'components/commons/Container';
import Modal from 'components/unit/Modal';
import useModal from 'hooks/useModal';
import AuthModalFrame from 'components/commons/Modal/SignModal';

const BoardList = () => {
  const { modalIsOpen, toggleModal } = useModal();

  const openModal = () => {
    toggleModal();
  };

  return (
    <>
      {modalIsOpen && (
        <Modal toggleModal={toggleModal}>
          <AuthModalFrame toggleModal={toggleModal}>
            <div>test</div>
          </AuthModalFrame>
        </Modal>
      )}
      <Container>
        <div>
          <button onClick={openModal}>AuthModal</button>
          <p>보드 게시판</p>
        </div>
      </Container>
    </>
  );
};

export default BoardList;
