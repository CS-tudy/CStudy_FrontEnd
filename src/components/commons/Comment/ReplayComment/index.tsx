import AddComment from '../addComment';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';
import useReplyButton from 'hooks/Comment/useReplyButton';

const ReplayCommentList = ({ replaycomment }: any) => {
  const maxDepth = useSelector(
    (state: any) => state.rootReducer.commentdepth.depth.maxDepth,
  );
  const currentDepth = useSelector(
    (state: any) => state.rootReducer.commentdepth.depth.currentDepth,
  );

  const { selectedCommentid, toggleReplyingHandler } = useReplyButton();

  return (
    <>
      {replaycomment?.map((replay: any) => (
        <S.Profile key={replay.id}>
          <S.Pheader>
            <p> {replay.author}</p>
          </S.Pheader>
          <S.Pboay>
            <p> {replay.content}</p>
          </S.Pboay>
          {selectedCommentid !== replay.id && (
            <div>
              <button onClick={() => toggleReplyingHandler(replay.id)}>
                댓글 달기
              </button>
            </div>
          )}

          {selectedCommentid === replay.id && (
            <div>
              <button onClick={() => toggleReplyingHandler('')}>닫기</button>
              <AddComment parentId={replay.id} />
            </div>
          )}
          <ReplayCommentList
            replaycomment={replay.childComments}
            maxDepth={maxDepth}
            currentDepth={currentDepth + 1}
          />
        </S.Profile>
      ))}
    </>
  );
};

export default ReplayCommentList;
