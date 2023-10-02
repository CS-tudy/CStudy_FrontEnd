import useGetCommentList from 'hooks/@query/comment/useGetCommentts';
import Container from '../Container';
import AddComment from './addComment';
import CommentList from './List';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { useDispatch } from 'react-redux';
import { setpageNumber } from 'hooks/@redux/comment';

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
