import { ROUTE } from 'constants/Route';
import {
  ContestFilterStoreType,
  setContestQuery,
  setContestPageNumber,
  reset,
} from 'hooks/@redux/filterSlice';
// import useLoginModal from 'hooks/@zustand/useLoginModal';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from 'repository/auth';

interface ContestFilterType {
  contestFilter: ContestFilterStoreType;
  isActive: string;
  handlePage: (page: number) => void;
  handleToggle: () => void;
  checkAndDisplayLoginModal: (e: React.MouseEvent) => void;
}

const useContestFilter = (): ContestFilterType => {
  const dispatch = useDispatch();
  // const contestFilter = useContestFilterStore();
  //   const loginModal = loginModal();
  const contestFilter = useSelector(
    (state: any) => state.rootReducer.contestFilter,
  );

  const isActive = contestFilter.query === ROUTE.CONTEST_FINISH ? 'active' : '';

  const handlePage = (page: number) => {
    //   boardFilter.setPageNumber(page);
    dispatch(setContestPageNumber(page));
  };

  const handleToggle = () => {
    // contestFilter.reset();
    dispatch(reset());
    dispatch(
      setContestQuery(
        contestFilter.query === 'active' ? ROUTE.CONTEST_FINISH : 'active',
      ),
    );
  };

  const checkAndDisplayLoginModal = (e: React.MouseEvent) => {
    if (!isLogin()) {
      e.preventDefault();
      // loginModal.onOpen();
    }
  };

//   return {
//     contestFilter,
//     isActive,
//     handlePage,
//     handleToggle,
//     checkAndDisplayLoginModal,
//   };
// };

export default useContestFilter;
