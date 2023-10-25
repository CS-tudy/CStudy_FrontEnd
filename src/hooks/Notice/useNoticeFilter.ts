import { ROUTE } from 'constants/Route';
import {
  reset,
  setNoticeFilterSearchTitle,
  setNoticeFilterSearchContent,
  setNoticeFilterSearchReset,
  setNoticeFilterPageNumber,
  setRequestQuery,
} from 'hooks/@redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { RootState } from 'stroe';

const useNoticeFilter = () => {
  const dispatch = useDispatch();
  const noticeFilter = useSelector(
    (state: RootState) => state.rootReducer.Noticefilter,
  );

  const handlePage = (page: number) => {
    console.log(page);

    dispatch(setNoticeFilterPageNumber(page));
  };

  const handleToggle = () => {
    // dispatch(reset());

    dispatch(setRequestQuery(ROUTE.NOTICE_LIST));
  };

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    formData => {
      const { searchOption, title, content } = formData;

      if (searchOption === 'title') {
        dispatch(setNoticeFilterSearchTitle(title));
        dispatch(setNoticeFilterSearchContent(''));
      } else if (searchOption === 'content') {
        dispatch(setNoticeFilterSearchContent(content));
        dispatch(setNoticeFilterSearchTitle(''));
      }
    },
    [noticeFilter],
  );

  return {
    noticeFilter,
    handlePage,
    handleToggle,
    onSubmit,
  };
};

export default useNoticeFilter;
