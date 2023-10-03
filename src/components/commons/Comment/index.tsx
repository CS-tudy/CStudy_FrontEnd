import useGetCommentList from 'hooks/@query/comment/useGetCommentts';
import Container from '../Container';
import AddComment from './AddComment';
import CommentList from './List';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { useDispatch } from 'react-redux';
import { setpageNumber } from 'hooks/@redux/comment';
import { RequestComment } from 'types/api';
interface CommentListProps {
  commentList: RequestComment[];
}
const Comment = () => {
  const dispatch = useDispatch();
  const { Id } = useParams();
  dispatch(setpageNumber(Id));
  const commentList = useGetCommentList(Id);

  return (
    <>
      <AddComment />
      <CommentList commentList={commentList as any} />
    </>
  );
};

export default Comment;
