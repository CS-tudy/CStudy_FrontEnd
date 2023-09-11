import Modal from 'components/commons/Modal';
import * as S from './style';
import Button from 'components/commons/Button/Button';

interface ConfirmModalProps {
  title: string;
  isOpen: boolean;
  isLoading?: boolean;
  confirmText: string;
  cancelText: string;
  // handleConfirm: () => void;
  // handleCancel: () => void;
}

const ConfirmModal = ({
  isLoading,
  title,
  isOpen,
  confirmText,
  cancelText, // handleConfirm,handleCancel,
}: ConfirmModalProps) => {
  return (
    // <Modal toggleModal={handleCancel}>
    <S.ModalContainer>
      <S.ModalTitle>{title}</S.ModalTitle>
      <S.ButtonRow>
        {/* <button
        // className="xl navy style w-half"
        // onClick={onConfirm}
        // disabled={isLoading}
        >
        </button> */}
        <Button variant="primary" size="medium">
          {confirmText}
        </Button>
        {/* <button
        // type="button"
        // className="xl gray style w-half"
        // onClick={onCancel}
        // disabled={isLoading}
        >
          {cancelText}
        </button> */}
        <Button variant="gray" size="medium">
          {cancelText}
        </Button>
      </S.ButtonRow>
    </S.ModalContainer>
    // </Modal>
  );
};

export default ConfirmModal;
