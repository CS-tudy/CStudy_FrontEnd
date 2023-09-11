import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginModal } from 'hooks/@redux/loginModalSlice';
import { toggleRegisterModal } from 'hooks/@redux/registerModalSlice';
import Modal from 'components/commons/Modal/index';

const GlobalAuthModals = () => {
  const dispatch = useDispatch();
  const isLoginOpen = useSelector(state => state.login.isOpen);
  const isRegisterOpen = useSelector(state => state.register.isOpen);

  return (
    <>
      {isLoginOpen && (
        <Modal toggleModal={() => dispatch(toggleLoginModal())}>
          <SignIn />
        </Modal>
      )}
      {isRegisterOpen && (
        <Modal toggleModal={() => dispatch(toggleRegisterModal())}>
          <SignUp />
        </Modal>
      )}
    </>
  );
};

export default GlobalAuthModals;
