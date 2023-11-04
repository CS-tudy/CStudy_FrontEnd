import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { QueryFilterStoreType, reset, setProblemQuery } from '../filterSlice';
import { ROUTE } from 'constants/Route';

interface QueryFilterActionProps {
  reset: () => void;
}

interface QueryFilterActionState {
  queryFilter: QueryFilterStoreType;
  query: string;
  queryActive: string;
  handleToggle: () => void;
}

const useQueryFilterSlice = (): QueryFilterActionState => {
  const dispatch = useDispatch();
  const queryFilterState = useSelector(
    (state: any) => state.rootReducer.queryFilter,
  );
  // queryFilterState.queryActive =
  //   queryFilterState.query === ROUTE.PROBLEMSET_MYQUESTION ? 'active' : '';

  const queryActive =
    queryFilterState.query === ROUTE.PROBLEMSET_MYQUESTION ? 'active' : '';

  const handleToggle = () => {
    dispatch(reset());
    dispatch(
      setProblemQuery(
        queryFilterState.query === '' ? ROUTE.PROBLEMSET_MYQUESTION : '',
      ),
    );
  };

  return { ...queryFilterState, handleToggle, queryActive };
};

export default useQueryFilterSlice;
