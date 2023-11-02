import ReactDOM from 'react-dom';
import * as S from './style';

interface Props {
  children: JSX.Element;
  toggleModal: VoidFunction;
}

const portalElement = document.getElementById('alarm-root') as Element;

const Modal2 = ({ children, toggleModal }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <S.Backdrop onClick={toggleModal} />,
        portalElement,
      )}
      {ReactDOM.createPortal(children, portalElement)}
    </>
  );
};

export default Modal2;
