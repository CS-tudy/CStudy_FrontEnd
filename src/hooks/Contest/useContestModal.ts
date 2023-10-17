import { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const joinContest = useJoinContest({
    contestId,
    handleIsLoading,
    setIsModalOpen,
  } as UseJoinContestProps);

  const handleConfirm = () => {
    joinContest(contestId as string);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleJoinContestModal = () => {
    setIsModalOpen(true);
  };
  return {
    isModalOpen,
    handleConfirm,
    handleCancel,
    handleJoinContestModal,
  };
};

export default useJoinContestModal;
