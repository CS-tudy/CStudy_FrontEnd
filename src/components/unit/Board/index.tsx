import Container from 'components/commons/Container';
import Modal from 'components/commons/Modal';
import useModal from 'hooks/useModal';
import AuthModalFrame from 'components/commons/Modal/AuthModalFrame';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginModal } from 'hooks/@redux/loginModalSlice';
import {
  RegisterModalState,
  toggleRegisterModal,
} from 'hooks/@redux/registerModalSlice';

const BoardList = () => {
  // const { modalIsOpen, toggleModal } = useModal();
  const dispatch = useDispatch();
  const isRegisterOpen = useSelector(state => state.registerModal.isOpen);

  const openModal = () => {
    // toggleModal();
    dispatch(toggleRegisterModal());
  };

  return (
    <>
      {isRegisterOpen && (
        <Modal toggleModal={() => dispatch(toggleRegisterModal())}>
          <AuthModalFrame toggleModal={() => dispatch(toggleRegisterModal())}>
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

// import Container from 'components/commons/Container';
// import Modal from 'components/commons/Modal';
// import useModal from 'hooks/useModal';
// import AuthModalFrame from 'components/commons/Modal/AuthModalFrame';

// const BoardList = () => {
//   const { modalIsOpen, toggleModal } = useModal();

//   const openModal = () => {
//     toggleModal();
//   };

//   return (
//     <>
//       {modalIsOpen && (
//         <Modal toggleModal={toggleModal}>
//           <AuthModalFrame toggleModal={toggleModal}>
//             <div>test</div>
//           </AuthModalFrame>
//         </Modal>
//       )}
//       <Container>
//         <div>
//           <button onClick={openModal}>AuthModal</button>
//           <p>보드 게시판</p>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default BoardList;
