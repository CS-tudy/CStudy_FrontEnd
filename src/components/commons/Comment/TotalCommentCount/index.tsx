import { RequestComment } from 'types/api';
import { useEffect, useState } from 'react';
import useGetCommentList from 'hooks/@query/comment/useGetCommentts';

const TotalCommentCount = ({ Id }: any) => {
  const [totalCount, setTotalCount] = useState<number | undefined>(undefined);
  const commentList = useGetCommentList(Id);

  useEffect(() => {
    if (commentList) {
      const countComments = (comments: RequestComment[]) => {
        let count = comments.length;

        for (const comment of comments) {
          if (comment.childComments && comment.childComments.length > 0) {
            count += countComments(comment.childComments);
          }
        }

        return count;
      };

      const totalCount = countComments(commentList as any);
      setTotalCount(totalCount);
    }
  }, [commentList]);

  return <>{totalCount}</>;
};

export default TotalCommentCount;
