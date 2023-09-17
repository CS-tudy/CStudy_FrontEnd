import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import ContentContainer from 'components/commons/ContentContainer';
import BoardList from 'components/unit/Board';
import useGetToggleRequestList from 'hooks/@query/board/useGetBoardList';
import { useDispatch, useSelector } from 'react-redux';

const Board = () => {
  const requestList = useGetToggleRequestList({ page: 0 });

  return (
    <>
      <ContentContainer>
        <ContentBodyWrapper>
          <BoardList></BoardList>
        </ContentBodyWrapper>
      </ContentContainer>
      ;
    </>
  );
};

export default Board;
