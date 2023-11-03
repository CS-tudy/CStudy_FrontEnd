import { ROUTE } from 'constants/Route';
import {
  ContestFilterStoreType,
  setContestQuery,
  setContestPageNumber,
  reset,
} from 'hooks/@redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

interface ContestFilterType {
  contestFilter: ContestFilterStoreType;
  isActive: string;
  handlePage: (page: number) => void;
  handleToggle: () => void;
  // checkAndDisplayLoginModal: (e: React.MouseEvent) => void;
}

const useContestFilter = (): ContestFilterType => {
  const dispatch = useDispatch();
  const contestFilter = useSelector(
    (state: any) => state.rootReducer.contestFilter,
  );

  const isActive = contestFilter.query === ROUTE.CONTEST_FINISH ? 'active' : '';

  const handlePage = (page: number) => {
    dispatch(setContestPageNumber(page));
  };

  const handleToggle = () => {
    dispatch(reset());
    dispatch(
      setContestQuery(
        contestFilter.query === 'active' ? ROUTE.CONTEST_FINISH : 'active',
      ),
    );
  };

  return {
    contestFilter,
    isActive,
    handlePage,
    handleToggle,
  };
};

export default useContestFilter;
