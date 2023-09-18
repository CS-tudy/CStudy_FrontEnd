import { ROUTE } from 'constants/Route';
import { reset, setPageNumber, setQuery } from 'hooks/@redux/filterSlice';
// import {
//   BoardFilterStoreType,
//   useBoardFilterStore,
// } from 'hooks/@zustand/filterStore';
// import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// interface BoardFilterType {
//   boardFilter: BoardFilterStoreType;
//   handlePage: (page: number) => void;
//   handleToggle: () => void;
//   isActive: string;
// }

const useRequestFilter = () => {
  const dispatch = useDispatch();
  const requestFilter = useSelector((state: any) => state.filter);

  //   const boardFilter = useBoardFilterStore();
  const isActive =
    requestFilter.query === ROUTE.REQUEST_MY_LIST ? 'active' : '';

  const handlePage = (page: number) => {
    //   boardFilter.setPageNumber(page);
    dispatch(setPageNumber(page));
  };

  const handleToggle = () => {
    // boardFilter.reset();
    dispatch(reset());
    // boardFilter.setQuery(
    //   boardFilter.query === ROUTE.BOARD_LIST
    //     ? ROUTE.BOARD_MY_LIST
    //     : ROUTE.BOARD_LIST,
    // );
    dispatch(
      setQuery(
        requestFilter.query === ROUTE.REQUEST_LIST
          ? ROUTE.REQUEST_MY_LIST
          : ROUTE.REQUEST_LIST,
      ),
    );
  };

  return {
    // boardFilter,
    requestFilter,
    handlePage,
    handleToggle,
    isActive,
  };
};

export default useRequestFilter;
