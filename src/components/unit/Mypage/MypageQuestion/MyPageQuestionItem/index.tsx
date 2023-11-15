import ApproveStatus from 'components/commons/Status';
import { TBodyTd } from 'components/commons/Table/style';
import Answer from 'components/commons/answer';
import React, { memo } from 'react';
import { reviewNotes } from 'types/mypage';

interface boardProps {
  handleDetailAnswer: (id: number) => void;
  note: reviewNotes;
}

const MypageQuestionItem = ({ handleDetailAnswer, note }: boardProps) => {
  const { questionId, questionTitle, categoryTitle, answer } = note;
  return (
    <tr
      style={{ cursor: 'pointer' }}
      onClick={() => handleDetailAnswer(questionId)}
    >
      <TBodyTd $white={true} $narrow2>
        {questionId}
      </TBodyTd>
      <TBodyTd $white={true} $narrow2>
        {questionTitle}
      </TBodyTd>
      <TBodyTd $white={true} $narrow2>
        {categoryTitle}
      </TBodyTd>
      <TBodyTd $white={true} $narrow2>
        <Answer answer={answer} />
      </TBodyTd>
    </tr>
  );
};

export default memo(MypageQuestionItem);
