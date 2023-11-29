import { ROUTE } from 'constants/Route';
import {
  setNoticeFilterPageNumber,
  setNoticeFilterSearchValue,
  setRequestQuery,
  setNoticeFilterearchOption,
  setNoticeFilterSearchCategory,
} from 'hooks/@redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useCallback } from 'react';
import { RootState } from 'stroe';

const useNoticeFilter = () => {
  const dispatch = useDispatch();
  const noticeFilter = useSelector(
    (state: RootState) => state.rootReducer.Noticefilter,
  );

  const handlePage = (page: number) => {
    dispatch(setNoticeFilterPageNumber(page));
  };

  const handleToggle = () => {
    dispatch(setRequestQuery(ROUTE.NOTICE_LIST));
  };

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    formData => {
      const { searchInput } = formData;

      dispatch(setNoticeFilterSearchValue(searchInput));
    },
    [noticeFilter],
  );

  const handleOptionChange = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const value = target.getAttribute('value');
    dispatch(setNoticeFilterearchOption(value));
    dispatch(setNoticeFilterSearchCategory(target.innerText));
  };

  return {
    noticeFilter,
    handlePage,
    handleToggle,
    onSubmit,
    handleOptionChange,
  };
};

export default useNoticeFilter;
