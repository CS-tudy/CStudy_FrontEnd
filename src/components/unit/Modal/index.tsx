import ReactDOM from 'react-dom';
import * as S from './style';

interface Props {
  children: JSX.Element;
  toggleModalHandler: VoidFunction;
}

const portalElement = document.getElementById('portal-root') as Element;

const Modal = ({ children, toggleModalHandler }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <S.Backdrop onClick={toggleModalHandler} />,
        portalElement,
      )}
      {ReactDOM.createPortal(children, portalElement)}
    </>
  );
};

export default Modal;
