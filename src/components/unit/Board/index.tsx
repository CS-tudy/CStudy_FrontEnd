import Container from 'components/commons/Container';
import Modal from 'components/unit/Modal';
import useModal from 'hooks/useModal';
import * as S from './style';

const BoardList = () => {
  const { modalIsOpen, toggleModal } = useModal();

  const openModal = () => {
    toggleModal();
  };

  return (
    <>
      {modalIsOpen && (
        <Modal toggleModal={toggleModal}>
          <S.ModalTest>test</S.ModalTest>
        </Modal>
      )}
      <Container>
        <div>
          <p>
            <button onClick={openModal}>modalTest</button>
          </p>
          <p>보드 게시판</p>
        </div>
      </Container>
    </>
  );
};

export default BoardList;
