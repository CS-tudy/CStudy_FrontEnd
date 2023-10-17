import { useEffect, useState } from 'react';
import { useJoinContest } from 'hooks/@query/contest/useJoinContest';
import { UseJoinContestProps } from 'types/contest';

interface JoinContestProps {
  contestId: string;
  handleIsLoading: (isLoading: boolean) => void;
}

const useJoinContestModal = ({
  handleIsLoading,
  contestId,
}: JoinContestProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const JoinContest = useJoinContest({
    contestId,
    handleIsLoading,
    setModalIsOpen,
  } as UseJoinContestProps);

  const handleConfirm = () => {
    JoinContest(contestId as string);
    setModalIsOpen(!modalIsOpen);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [modalIsOpen]);

  return {
    modalIsOpen,
    handleConfirm,
    toggleModal,
  };
};

export default useJoinContestModal;
