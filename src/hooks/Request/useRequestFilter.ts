import { ROUTE } from 'constants/Route';
import {
  reset,
  setPageNumber,
  setRequestQuery,
} from 'hooks/@redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const useRequestFilter = () => {
  const dispatch = useDispatch();
  const requestFilter = useSelector((state: any) => state.rootReducer.filter);

  const isActive =
    requestFilter.query === ROUTE.REQUEST_MY_LIST ? 'active' : '';

  const handlePage = (page: number) => {
    dispatch(setPageNumber(page));
  };

  const handleToggle = () => {
    dispatch(reset());
    dispatch(
      setRequestQuery(
        requestFilter.query === ROUTE.REQUEST_LIST
          ? ROUTE.REQUEST_MY_LIST
          : ROUTE.REQUEST_LIST,
      ),
    );
  };

  return {
    requestFilter,
    handlePage,
    handleToggle,
    isActive,
  };
};

export default useRequestFilter;
