import useGetCommentList from 'hooks/@query/comment/useGetCommentts';
import AddComment from './OptionaddComment';
import CommentList from './List';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setpageNumber } from 'hooks/@redux/comment';
import { RequestComment } from 'types/api';

const Comment = () => {
  const dispatch = useDispatch();
  const { Id } = useParams();
  dispatch(setpageNumber(Id));
  const commentList = useGetCommentList(Id);

  return (
    <>
      <AddComment />
      <CommentList commentList={commentList as RequestComment} />
    </>
  );
};

export default Comment;
