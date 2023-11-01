import { RequestComment } from 'types/api';
import InfoCommentList from '../ReplayCommentList';

interface CommentListProps {
  currentDepth?: number;
  commentList: RequestComment;
}

const CommentList = ({ commentList, currentDepth }: CommentListProps) => {
  return (
    <>
      {commentList?.map((comment: RequestComment) => (
        <InfoCommentList
          key={comment.id}
          id={comment.id}
          author={comment.author}
          content={comment.content}
          childComments={comment.childComments}
          currentDepth={currentDepth}
        />
      ))}
    </>
  );
};

export default CommentList;
