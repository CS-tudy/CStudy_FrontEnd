import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { reset, setProblemQuery } from '../filterSlice';
import { ROUTE } from 'constants/Route';

const useQueryFilterSlice = (): QueryFilterActionState => {
  const dispatch = useDispatch();
  const queryFilterState = useSelector(
    (state: any) => state.persistedReducer.queryFilter,
  );
  // queryFilterState.queryActive =
  //   queryFilterState.query === ROUTE.PROBLEMSET_MYQUESTION ? 'active' : '';

  const isActive =
    queryFilterState.query === ROUTE.PROBLEMSET_MYQUESTION ? 'active' : '';

  const handleToggle = () => {
    dispatch(reset());
    dispatch(
      setProblemQuery(
        queryFilterState.query === '' ? ROUTE.PROBLEMSET_MYQUESTION : '',
      ),
    );
  };

  return { ...queryFilterState, handleToggle, isActive };
};

export default useQueryFilterSlice;
