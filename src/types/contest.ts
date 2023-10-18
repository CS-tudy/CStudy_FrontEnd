import { Dispatch, SetStateAction } from 'react';

export interface UseJoinContestProps {
  competitionId?: string;
  handleIsLoading: (isLoading: boolean) => void;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

// component: Quiz

export interface UseSubmitContestProps {
  competitionId: string;
  handleIsLoading: (isLoading: boolean) => void;
}
