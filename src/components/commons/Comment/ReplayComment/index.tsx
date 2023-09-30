import AddComment from '../addComment';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';
import useReplyButton from 'hooks/Comment/useReplyButton';

const ReplayCommentList = ({ replaycomment }: any) => {
  const dispatch = useDispatch();
  const maxDepth = useSelector(
    (state: any) => state.rootReducer.commentdepth.depth.maxDepth,
  );
  const currentDepth = useSelector(
    (state: any) => state.rootReducer.commentdepth.depth.currentDepth,
  );
  const isPlaying = useSelector(
    (state: any) => state.rootReducer.commentdepth.isReplying,
  );

  const { selectedCommentId, toggleReplyingHandler } = useReplyButton();

  return (
    <S.Wrapper>
      {replaycomment?.map((replay: any) => (
        <S.Profile key={replay.id}>
          <p> {replay.author}</p>
          <p> {replay.content}</p>
          {selectedCommentId !== replay.id && (
            <div>
              <button onClick={() => toggleReplyingHandler(replay.id)}>
                댓글 달기
              </button>
            </div>
          )}

          {selectedCommentId === replay.id && (
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
    </S.Wrapper>
  );
};

export default ReplayCommentList;
