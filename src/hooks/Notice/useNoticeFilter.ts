import { ROUTE } from 'constants/Route';
import {
  reset,
  setNoticeFilterSearchTitle,
  setNoticeFilterSearchContent,
  setPageNumber,
  setQuery,
} from 'hooks/@redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useCallback } from 'react';

const useNoticeFilter = () => {
  const dispatch = useDispatch();
  const noticeFilter = useSelector(
    (state: any) => state.rootReducer.Noticefilter,
  );

  // Define your isActive variable as you have done

  const handlePage = (page: number) => {
    dispatch(setPageNumber(page));
  };

  const handleToggle = () => {
    // dispatch(reset());

    dispatch(setQuery(ROUTE.NOTICE_LIST));
  };

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    ({ searchOption, title, content }) => {
      if (searchOption === 'title') {
        dispatch(setNoticeFilterSearchTitle(title));
        dispatch(setNoticeFilterSearchContent('')); // 리셋 컨텐츠 검색
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
