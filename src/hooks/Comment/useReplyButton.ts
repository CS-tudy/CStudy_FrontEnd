import { toggleReplying } from 'hooks/@redux/comment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const useReplyButton = () => {
  const [selectedCommentId, setSelectedCommentId] = useState('');
  const dispatch = useDispatch();

  const toggleReplyingHandler = (commentId: string) => {
    setSelectedCommentId(commentId);
    dispatch(toggleReplying());
  };

  return { selectedCommentId, toggleReplyingHandler };
};

export default useReplyButton;
