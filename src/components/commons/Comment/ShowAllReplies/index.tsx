import * as S from './style';

interface ShowAllRepliesProps {
  commentLength: number;
  isCommentToggle: boolean;
  commentToggle: () => void;
}

const ShowComment = ({
  commentLength,
  isCommentToggle,
  commentToggle,
}: ShowAllRepliesProps) => {
  return (
    <S.Button onClick={commentToggle}>
      {isCommentToggle ? '접기' : `${commentLength} 댓글 더 보기`}
    </S.Button>
  );
};

export default ShowComment;
