// import { ROUTE } from 'constants/Route';

// import { useCallback } from 'react';

// interface BoardFilterType {
//   boardFilter: BoardFilterStoreType;
//   handlePage: (page: number) => void;
//   handleToggle: () => void;
//   isActive: string;
// }

// const useBoardFilter = (): BoardFilterType => {
//   //현재 페이지 추적
//   const boardFilter = useBoardFilterStore();
//   const isActive = boardFilter.query === ROUTE.BOARD_MY_LIST ? 'active' : '';

//   const handlePage = useCallback(
//     (page: number) => {
//       boardFilter.setPageNumber(page);
//     },
//     [boardFilter],
//   );

//   //   const handleToggle = useCallback(() => {
//   //     boardFilter.reset();
//   //     boardFilter.setQuery(
//   //       boardFilter.query === ROUTE.BOARD_LIST
//   //         ? ROUTE.BOARD_MY_LIST
//   //         : ROUTE.BOARD_LIST,
//   //     );
//   //   }, [boardFilter]);
//   return {
//     boardFilter,
//     handlePage,
//     // handleToggle,
//     isActive,
//   };
// };

// export default useBoardFilter;

export {};
