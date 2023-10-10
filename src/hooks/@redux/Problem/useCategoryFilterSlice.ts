import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import {
  reset,
  setCategory,
  setCategoryValue,
  toggleCategoryActive,
} from '../filterSlice';

const useCategoryFilterSlice = () => {
  const dispatch = useDispatch();

  const categoryFilterState = useSelector(
    (state: any) => state.rootReducer.categoryFilter,
  );

  const handleCategoryClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    dispatch(toggleCategoryActive());
    if (target.nodeName === 'LI') {
      reset();
      dispatch(setCategory(target.innerText));
      dispatch(setCategoryValue(target.dataset.value as string));
    }
  };

  return { ...categoryFilterState, handleCategoryClick };
};

export default useCategoryFilterSlice;
