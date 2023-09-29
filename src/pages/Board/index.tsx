import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import ContentContainer from 'components/commons/ContentContainer';
import BoardList from 'components/unit/Board';
import { useDispatch, useSelector } from 'react-redux';

const Board = () => {
  const requestFilter = useSelector(
    (state: any) => state.persistedReducer.filter,
  );
  console.log(requestFilter);
  return (
    <>
      <ContentContainer>
        <ContentBodyWrapper>{/* <BoardList></BoardList> */}</ContentBodyWrapper>
      </ContentContainer>
      ;
    </>
  );
};

export default Board;
