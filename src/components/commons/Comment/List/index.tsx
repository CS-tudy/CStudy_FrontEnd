import { RequestComment } from 'types/api';
import ReplayCommentList from '../ReplayComment';
import AddComment from '../addComment';
import * as S from './style';
import useReplyButton from 'hooks/Comment/useReplyButton';

interface CommentListProps {
  commentList: RequestComment[];
  //
}

const CommentList = ({ commentList }: CommentListProps) => {
  const { selectedCommentId, toggleReplyingHandler } = useReplyButton();
  console.log(commentList);

  return (
    <S.Wrapper>
      {commentList?.map((comment: RequestComment) => (
        <S.ProfileContainer key={comment.id}>
          <S.Profile>
            <p> {comment.author}</p>
            <p> {comment.content}</p>
            {selectedCommentId !== comment.id && (
              <div>
                <button onClick={() => toggleReplyingHandler(comment.id)}>
                  댓글 달기
                </button>
              </div>
            )}

            {selectedCommentId === comment.id && (
              <div>
                <button onClick={() => toggleReplyingHandler('')}>닫기</button>
                <AddComment parentId={comment.id} />
              </div>
            )}
          </S.Profile>
          {comment.childComments && (
            <ReplayCommentList replaycomment={comment.childComments} />
          )}
        </S.ProfileContainer>
      ))}
    </S.Wrapper>
  );
};

export default CommentList;
