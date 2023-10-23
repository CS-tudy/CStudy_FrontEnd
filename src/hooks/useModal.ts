import { useEffect, useState } from 'react';

const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  // useEffect(() => {
  //   if (modalIsOpen) {
  //     document.body.style.overflowY = 'hidden';
  //   } else {
  //     document.body.style.overflowY = 'auto';
  //   }
  // }, [modalIsOpen]);

  return {
    modalIsOpen,
    toggleModal,
  };
};

export default useModal;
