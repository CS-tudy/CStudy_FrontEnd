import * as S from './style';
import useReplyFilter from 'hooks/Comment/useReplyButton';
import AddCommentForm from '../OptionaddComment';
import CommentList from '../List';
import DeleteComment from '../OptionDeleteComment';
import ShowComment from '../ShowAllReplies';

interface ReplayProps {
  id: string;
  memberId: string;
  author: string;
  content: string;
  childComments?: ReplayProps[];
  currentDepth?: number;
}

const ReplyCommentList = ({
  id,
  memberId,
  author,
  content,
  childComments,
  currentDepth = 0,
}: ReplayProps) => {
  const {
    selectedCommentid,
    toggleReplyingHandler,
    getUserImg,
    isCommentToggle,
    commentToggle,
  } = useReplyFilter();

  return (
    <S.Container currentDepth={currentDepth}>
      <S.Profile currentDepth={currentDepth}>
        <S.CommentHeader>
          <S.UserInfo>
            <S.Userimg>
              <img src={getUserImg(author)} />
            </S.Userimg>
            <S.Pheader>{author}</S.Pheader>
          </S.UserInfo>
          <DeleteComment
            currentDepth={currentDepth}
            memberId={memberId}
            commentId={id}
          />
        </S.CommentHeader>
        <S.Pcontent>{content}</S.Pcontent>

        {selectedCommentid !== id ? (
          <>
            <S.ReplyButton onClick={() => toggleReplyingHandler(id)}>
              댓글 달기
            </S.ReplyButton>
          </>
        ) : (
          <>
            <S.CloseButton onClick={() => toggleReplyingHandler('')}>
              닫기
            </S.CloseButton>
            <AddCommentForm parentId={id} />
          </>
        )}
        {childComments && childComments.length > 0 && (
          <ShowComment
            commentLength={childComments.length}
            isCommentToggle={isCommentToggle}
            commentToggle={commentToggle}
          />
        )}
      </S.Profile>
      <S.ReplyContainer>
        <S.ChildComments currentDepth={currentDepth}>
          {isCommentToggle && childComments && (
            <CommentList
              commentList={childComments as any}
              currentDepth={currentDepth + 1}
            />
          )}
        </S.ChildComments>
      </S.ReplyContainer>
    </S.Container>
  );
};

export default ReplyCommentList;
