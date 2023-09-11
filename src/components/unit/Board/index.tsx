import Container from 'components/commons/Container';
import Modal from 'components/commons/Modal';
import useModal from 'hooks/useModal';
import AuthModalFrame from 'components/commons/Modal/AuthModalFrame';

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
