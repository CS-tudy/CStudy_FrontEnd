import { useState } from 'react';

const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return {
    modalIsOpen,
    toggleModal,
  };
};

export default useModal;
