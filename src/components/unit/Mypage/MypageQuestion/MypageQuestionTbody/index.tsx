import React from 'react';
import MyPageQuestionItem from '../MyPageQuestionItem';
import { myPageReviewState, reviewNotes } from 'types/mypage';

interface MypageQuestionTbodyProps {
  reviewList: myPageReviewState;
  handleDetailAnswer: (id: number) => void;
}

const MypageQuestionTbody = ({
  reviewList,
  handleDetailAnswer,
}: MypageQuestionTbodyProps) => {
  return (
    <>
      {reviewList?.reviewNotes?.map((note: reviewNotes) => (
        <MyPageQuestionItem
          key={note.id}
          note={note}
          handleDetailAnswer={handleDetailAnswer}
        />
      ))}
    </>
  );
};

export default MypageQuestionTbody;
