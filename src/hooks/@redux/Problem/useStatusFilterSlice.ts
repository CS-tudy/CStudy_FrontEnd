import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import {
  reset,
  setStatus,
  setStatusValue,
  toggleStatusActive,
} from '../filterSlice';

const useStatusFilterSlice = () => {
  const dispatch = useDispatch();

  const statusFilterState = useSelector(
    (state: any) => state.rootReducer.statusFilter,
  );

  const handleStatusClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    dispatch(toggleStatusActive());
    if (target.nodeName === 'LI') {
      reset();
      dispatch(setStatus(target.innerText));
      dispatch(setStatusValue(Number(target.dataset.value)));
    }
  };

  return { ...statusFilterState, handleStatusClick };
};

export default useStatusFilterSlice;
