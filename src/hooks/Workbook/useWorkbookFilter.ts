import { setTitle, setPageNum, setReset } from 'hooks/@redux/filterSlice';
import { useCallback } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stroe';

const useWorkbookFilter = () => {
  const dispatch = useDispatch();

  const workbookFilter = useSelector(
    (state: RootState) => state.rootReducer.workbookfilter,
  );

  const handlePage = useCallback(
    (page: number) => {
      dispatch(setPageNum(page));
    },
    [workbookFilter],
  );

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    ({ search }) => {
      dispatch(setTitle(search));
      //   dispatch(setDescription(search));
    },
    [workbookFilter],
  );

  const handleReset = () => {
    dispatch(setReset());
  };

  return {
    workbookFilter,
    handlePage,
    onSubmit,
    handleReset,
  };
};

export default useWorkbookFilter;
