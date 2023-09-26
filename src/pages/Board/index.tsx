import BoardList from 'components/unit/Board';
import { useDispatch, useSelector } from 'react-redux';

const Board = () => {
  const requestFilter = useSelector((state: any) => state);
  console.log(requestFilter);
  return (
    <>
      <BoardList />
    </>
  );
};

export default Board;
