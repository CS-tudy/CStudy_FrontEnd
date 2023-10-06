import AddComment from '../OptionaddComment';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';
import useReplyButton from 'hooks/Comment/useReplyButton';
import { RootState } from 'stroe';

interface ReplayProps {
  id: string;
  author: string;
  content: string;
  childComments?: ReplayProps[];
}

interface childCommentsProps {
  replaycomment?: ReplayProps[];
}

const ReplayCommentList = ({ replaycomment }: childCommentsProps) => {
  const maxDepth = useSelector(
    (state: RootState) => state.rootReducer.comment.depth.maxDepth,
  );
  const currentDepth = useSelector(
    (state: RootState) => state.rootReducer.comment.depth.currentDepth,
  );
  console.log(replaycomment);

  const { selectedCommentid, toggleReplyingHandler } = useReplyButton();

  return (
    <>
      {replaycomment?.map((replay: ReplayProps) => (
        <S.Container key={replay.id}>
          <S.Profile>
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
          </S.Profile>
          <ReplayCommentList replaycomment={replay.childComments} />
        </S.Container>
      ))}
    </>
  );
};

export default ReplayCommentList;
