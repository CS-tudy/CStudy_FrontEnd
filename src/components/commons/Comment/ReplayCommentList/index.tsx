import * as S from './style';
import useReplyFilter from 'hooks/Comment/useReplyButton';
import AddCommentForm from '../OptionaddComment';
import CommentList from '../List';
import { useState } from 'react';
import { RequestComment } from 'types/api';

interface ReplayProps {
  id: string;
  author: string;
  content: string;
  childComments?: ReplayProps[];
  currentDepth?: number;
}

const ReplyCommentList = ({
  id,
  author,
  content,
  childComments,
  currentDepth = 0,
}: ReplayProps) => {
  const { selectedCommentid, toggleReplyingHandler } = useReplyFilter();
  const [showAllReplies, setShowAllReplies] = useState(false);
  const handleShowAllReplies = () => {
    setShowAllReplies(prevState => !prevState);
  };

  return (
    <S.Container currentDepth={currentDepth}>
      <S.Profile currentDepth={currentDepth}>
        <S.Pheader>{author}</S.Pheader>
        <S.Pcontent>{content}</S.Pcontent>
        {selectedCommentid !== id ? (
          <S.ReplyButton onClick={() => toggleReplyingHandler(id)}>
            댓글 달기
          </S.ReplyButton>
        ) : (
          <>
            <S.CloseButton onClick={() => toggleReplyingHandler('')}>
              닫기
            </S.CloseButton>
            <AddCommentForm parentId={id} />
          </>
        )}
      </S.Profile>
      <S.ReplyContainer>
        {/* {showAllReplies ? (
          <CommentList commentList={childComments as any} />
        ) : (
          <div onClick={handleShowAllReplies}>더보기</div>
        )} */}
        <S.ChildComments currentDepth={currentDepth}>
          {childComments && childComments.length > 0 && (
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
