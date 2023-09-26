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
    (state: any) => state.persistedReducer.categoryFilter,
  );

  const handleCategoryClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    dispatch(setCategory(target.innerText));
    dispatch(setCategoryValue(target.dataset.value));
    dispatch(toggleCategoryActive());
    reset();
  };

  return { ...categoryFilterState, handleCategoryClick };
};

export default useCategoryFilterSlice;
