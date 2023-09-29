import useGetCommentList from 'hooks/@query/comment/useGetCommentts';
import Container from '../Container';
import AddComment from './addComment';
import CommentList from './List';
import { RequestComment } from 'types/api';
import { useParams } from 'react-router-dom';

const Comment = () => {
  const { Id } = useParams();
  const commentList = useGetCommentList(Id);
  const maxDepth = 3; // 최대 깊이 설정
  const currentDepth = 0; // 초기 현재 깊이 설정
  return (
    <Container>
      <AddComment id={Id} />
      <CommentList
        commentList={commentList as any}
        maxDepth={maxDepth}
        currentDepth={currentDepth}
      />
    </Container>
  );
};

export default Comment;
