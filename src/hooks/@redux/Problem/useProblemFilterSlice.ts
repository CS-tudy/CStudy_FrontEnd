import { useDispatch, useSelector } from 'react-redux';
import { setProblemPageNumber } from '../filterSlice';

const UseProblemFilterSlice = () => {
  const dispatch = useDispatch();
  const problemFilter = useSelector(
    (state: any) => state.rootReducer.problemFilter,
  );

  const handlePage = (page: number) => {
    //   boardFilter.setPageNumber(page);
    dispatch(setProblemPageNumber(page));
  };
  return {
    problemFilter,
    handlePage,
  };
};

export default UseProblemFilterSlice;
