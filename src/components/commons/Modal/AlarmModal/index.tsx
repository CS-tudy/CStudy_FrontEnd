import Modal from 'components/commons/Modal/Modal';
import * as S from './style';

// interface AlarmModalProps {
//     title: string;
//     isOpen: boolean;
//     isLoading?: boolean;
//     confirmText: string;
//     cancelText: string;
//     handleConfirm: () => void;
//     handleCancel: () => void;
//   }

const AlarmModal = ({ children }: any) => {
  return (
    // <Modal isOpenModal={isOpen} closeModalHandler={handleCancel}>
    <S.ModalContainer>
      {/* <S.ModalTitle>{title}</S.ModalTitle>
        <S.ButtonRow>
          <button onClick={handleConfirm} disabled={isLoading}>
            {confirmText}
          </button>
          <button onClick={handleCancel} disabled={isLoading}>
            {cancelText}
          </button>
        </S.ButtonRow> */}
      {children}
    </S.ModalContainer>
    // </Modal>
  );
};

export default AlarmModal;
