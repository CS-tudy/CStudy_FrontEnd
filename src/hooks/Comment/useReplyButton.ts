import { setCommentId } from 'hooks/@redux/comment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stroe';
import { useState } from 'react';

const useReplyFilter = () => {
  const selectedCommentid = useSelector(
    (state: RootState) => state.rootReducer.comment.selectedCommentid,
  );
  const currentDepth = useSelector(
    (state: RootState) => state.rootReducer.comment.depth.currentDepth,
  );
  const dispatch = useDispatch();

  const toggleReplyingHandler = (commentId: string) => {
    dispatch(setCommentId(commentId));
  };

  return { selectedCommentid, currentDepth, toggleReplyingHandler };
};

export default useReplyFilter;
