// import { useSelector, useDispatch } from 'react-redux';
// import { toggleLoginModal } from 'hooks/@redux/loginModalSlice';
// import { toggleRegisterModal } from 'hooks/@redux/registerModalSlice';
// import Modal from 'components/commons/Modal';

const GlobalAuthModals = () => {
  //   const dispatch = useDispatch();
  //   const isLoginOpen = useSelector(state => state.loginModal.isOpen);
  //   const isRegisterOpen = useSelector(state => state.registerModal.isOpen);

  return (
    <>
      {/* {isLoginOpen && (
        <Modal toggleModal={() => dispatch(toggleLoginModal())}>
          <SignIn />
        </Modal>
      )}
      {isRegisterOpen && (
        <Modal toggleModal={() => dispatch(toggleRegisterModal())}>
          <SignUp />
        </Modal>
      )} */}
    </>
  );
};

export default GlobalAuthModals;
