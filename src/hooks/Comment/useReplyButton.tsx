import { setCommentId } from 'hooks/@redux/comment';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import user1 from 'assets/comment_user/user1.png';
import user2 from 'assets/comment_user/user2.png';
import user3 from 'assets/comment_user/user3.png';
import defaultImg from 'assets/comment_user/default.png';

import { RootState } from 'stroe';

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

  const getUserImg = useCallback((img: string) => {
    switch (img) {
      case '황순욱':
        return user1;
      case '관리자':
        return user2;
      case '김지나':
        return user3;
      default:
        return defaultImg;
    }
  }, []);

  // const getUserImg = useCallback((title: string) => {
  //   const Images = ['황순욱', '김기리', '김충지', '이진수', '관리자'];

  //   for (const Img of Images) {
  //     if (title.includes(Img)) {
  //       return Img;
  //     }
  //   }
  //   return '';
  // }, []);

  return {
    selectedCommentid,
    currentDepth,
    toggleReplyingHandler,
    getUserImg,
  };
};

export default useReplyFilter;
