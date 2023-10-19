import { useState } from 'react';
import { useJoinContest } from 'hooks/@query/contest/useJoinContest';
import { UseJoinContestProps } from 'types/contest';

interface JoinContestProps {
  competitionId: string;
  handleIsLoading: (isLoading: boolean) => void;
}

const useJoinContestModal = ({
  handleIsLoading,
  competitionId,
}: JoinContestProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const joinContest = useJoinContest({
    competitionId,
    handleIsLoading,
    setModalIsOpen,
  } as UseJoinContestProps);

  const handleConfirm = () => {
    joinContest(competitionId as string);
  };

  const handleCancel = () => {
    setModalIsOpen(false);
  };

  const handleJoinContestModal = () => {
    setModalIsOpen(true);
  };
  return {
    modalIsOpen,
    handleConfirm,
    handleCancel,
    handleJoinContestModal,
  };
};

export default useJoinContestModal;
