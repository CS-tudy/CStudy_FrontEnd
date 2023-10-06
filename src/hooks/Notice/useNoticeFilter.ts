import { ROUTE } from 'constants/Route';
import {
  reset,
  setNoticeFilterSearchTitle,
  setNoticeFilterSearchContent,
  setPageNumber,
  setRequestQuery,
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

    dispatch(setRequestQuery(ROUTE.NOTICE_LIST));
  };

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    ({ title, content }) => {
      console.log(title);

      // dispatch(noticeFilter.setSearchInput(search));
      dispatch(setNoticeFilterSearchTitle(title));
      // noticeFilter.setSearchInput(search);
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
