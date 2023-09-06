import BoardList from 'components/unit/Board';
import Modal from 'components/unit/Modal';
import useModal from 'hooks/useModal';
import { styled } from 'styled-components';
import { useEffect } from 'react';

const ModalTest = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 50%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;

const Board = () => {
  const { modalIsOpen, toggleModal } = useModal();
  useEffect(() => {
    setTimeout(() => {
      toggleModal();
    }, 0);
  }, []);
  return (
    <>
      {modalIsOpen && (
        <Modal toggleModal={toggleModal}>
          <ModalTest>test</ModalTest>
        </Modal>
      )}
      <BoardList />
    </>
  );
};

export default Board;
