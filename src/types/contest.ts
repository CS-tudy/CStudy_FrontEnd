import { Dispatch, SetStateAction } from 'react';

export interface UseJoinContestProps {
  contestId?: string;
  handleIsLoading: (isLoading: boolean) => void;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

// component: Quiz

export interface UseSubmitContestProps {
  contestId: string;
  handleIsLoading: (isLoading: boolean) => void;
}
