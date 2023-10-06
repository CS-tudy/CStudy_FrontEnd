// import { ROUTE } from 'constants/Route';
// // import {
// //   ContestFilterStoreType,
// //   useContestFilterStore,
// // } from 'hooks/@zustand/filterStore';
// // import useLoginModal from 'hooks/@zustand/useLoginModal';
// import { useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import { isLogin } from 'repository/auth';

// interface ContestFilterType {
//   contestFilter: ContestFilterStoreType;
//   isActive: string;
//   handlePage: (page: number) => void;
//   handleToggle: () => void;
//   checkAndDisplayLoginModal: (e: React.MouseEvent) => void;
// }

// const useContestFilter = (): ContestFilterType => {
//   const dispatch = useDispatch();
//   // const contestFilter = useContestFilterStore();
//   //   const loginModal = loginModal();
//   const isActive = contestFilter.query === ROUTE.CONTEST_FINISH ? 'active' : '';

//   const handlePage = useCallback(
//     (page: number) => {
//       contestFilter.setPageNumber(page);
//     },
//     [contestFilter],
//   );

//   const handleToggle = useCallback(() => {
//     contestFilter.reset();
//     contestFilter.setQuery(
//       contestFilter.query === '' ? ROUTE.CONTEST_FINISH : '',
//     );
//   }, [contestFilter]);

//   const checkAndDisplayLoginModal = (e: React.MouseEvent) => {
//     if (!isLogin()) {
//       e.preventDefault();
//       // loginModal.onOpen();
//     }
//   };

//   return {
//     contestFilter,
//     isActive,
//     handlePage,
//     handleToggle,
//     checkAndDisplayLoginModal,
//   };
// };

// export default useContestFilter;
export {};
