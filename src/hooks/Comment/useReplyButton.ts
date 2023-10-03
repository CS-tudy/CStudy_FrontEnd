import { setCommentId } from 'hooks/@redux/comment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stroe';

const useReplyButton = () => {
  const selectedCommentid = useSelector(
    (state: RootState) => state.rootReducer.comment.selectedCommentid,
  );
  const dispatch = useDispatch();

  const toggleReplyingHandler = (commentId: string) => {
    dispatch(setCommentId(commentId));
  };

  return { selectedCommentid, toggleReplyingHandler };
};

export default useReplyButton;
