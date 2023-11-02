import { setmyPageStatusPageNumber } from 'hooks/@redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stroe';

interface ContestFilterType {
  myPageStatusFilter: { pageNumber: number };
  handlePage: (page: number) => void;
}

const useMypageFilter = (): ContestFilterType => {
  const dispatch = useDispatch();

  const myPageStatusFilter = useSelector(
    (state: RootState) => state.rootReducer.myPageStatusFilter,
  );

  const handlePage = (page: number) => {
    dispatch(setmyPageStatusPageNumber(page));
  };

  return {
    myPageStatusFilter,
    handlePage,
  };
};

export default useMypageFilter;
