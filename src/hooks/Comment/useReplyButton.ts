import { toggleReplying, setCommentId } from 'hooks/@redux/comment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useReplyButton = () => {
  const selectedCommentid = useSelector(
    (state: any) => state.rootReducer.commentdepth.selectedCommentid,
  );
  const dispatch = useDispatch();

  const toggleReplyingHandler = (commentId: string) => {
    dispatch(setCommentId(commentId));
  };

  return { selectedCommentid, toggleReplyingHandler };
};

export default useReplyButton;
