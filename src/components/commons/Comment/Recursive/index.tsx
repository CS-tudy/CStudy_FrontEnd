import { RequestComment } from 'types/api';
import ReplayCommentList from '../ReplayComment';

interface CommentListProps {
  commentList: RequestComment;
}

const CommentList = ({ comments }: any) => {
  return (
    <div>
      {/* Render top-level comments */}
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
