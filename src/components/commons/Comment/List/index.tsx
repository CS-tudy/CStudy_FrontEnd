import { RequestComment } from 'types/api';
import ReplayCommentList from '../ReplayComment';
import AddComment from '../OptionaddComment';
import * as S from './style';
import useReplyButton from 'hooks/Comment/useReplyButton';
import DeleteComment from '../OptionDeleteComment';

interface CommentListProps {
  commentList: RequestComment[];
}

const CommentList = ({ commentList }: CommentListProps) => {
  const { selectedCommentid, toggleReplyingHandler } = useReplyButton();
  //   console.log(commentList);

  return (
    <S.Wrapper>
      {commentList?.map((comment: RequestComment) => (
        <S.ProfileContainer key={comment.id}>
          <S.Profile>
            <S.Pheader>
              <p> {comment.author}</p>
              <DeleteComment commentId={comment.id} />
            </S.Pheader>
            <S.Pboay>
              <p> {comment.content}</p>
            </S.Pboay>
            {selectedCommentid !== comment.id && (
              <div>
                <button onClick={() => toggleReplyingHandler(comment.id)}>
                  댓글 달기
                </button>
              </div>
            )}

            {selectedCommentid === comment.id && (
              <div>
                <button onClick={() => toggleReplyingHandler('')}>닫기</button>
                <AddComment parentId={comment.id} />
              </div>
            )}
          </S.Profile>
          {comment.childComments && (
            <S.ReplayContainer>
              <ReplayCommentList replaycomment={comment.childComments} />
            </S.ReplayContainer>
          )}
        </S.ProfileContainer>
      ))}
    </S.Wrapper>
  );
};

export default CommentList;
