import { RequestComment } from 'types/api';
import ReplayCommentList from '../ReplayComment';
import Comment from '..';

interface CommentListProps {
  commentList: RequestComment[];
  maxDepth: number;
  currentDepth: number;
}

const CommentList = ({
  commentList,
  maxDepth,
  currentDepth,
}: CommentListProps) => {
  console.log(currentDepth);

  return (
    <div>
      {commentList?.map((comment: RequestComment) => (
        <div key={comment.id}>
          <p>Author: {comment.author}</p>
          <p>Content: {comment.content}</p>

          {/* Render child comments recursively */}
          {currentDepth < maxDepth && comment.childComments.length > 0 && (
            <div style={{ marginLeft: '40px' }}>
              {/* Recursively render deeper child comments */}
              <CommentList
                commentList={comment.childComments}
                maxDepth={maxDepth}
                currentDepth={currentDepth + 1} // Increase the current depth by 1
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
