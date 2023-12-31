import React, { useMemo } from 'react';
import {
  BoardTitle,
  MypageBoardInner,
  MypageBoardWrapper,
} from '../../MypageBoard/MypageBoardIConbine/style';
import Table2 from 'components/commons/Table2';
import MypageQuestionTbody from '../MypageQuestionTbody';
import { myPageReviewState } from 'types/mypage';

interface MypageQuestionProps {
  reviewList: myPageReviewState;
  handleDetailAnswer: (id: number) => void;
}

const MypageQuestion = ({
  reviewList,
  handleDetailAnswer,
}: MypageQuestionProps) => {
  const MypageQuestiontitle = useMemo(
    () => ['NO.', '문제이름', '카테고리', '문제의 답'],
    [],
  );
  const MypageQuestionColRate = useMemo(() => ['10%', '45%', '25%', '10%'], []);
  return (
    <MypageBoardWrapper>
      <BoardTitle>내가 풀은 문제</BoardTitle>
      <MypageBoardInner>
        <Table2 title={MypageQuestiontitle} colRate={MypageQuestionColRate}>
          <MypageQuestionTbody
            reviewList={reviewList}
            handleDetailAnswer={handleDetailAnswer}
          />
        </Table2>
      </MypageBoardInner>
    </MypageBoardWrapper>
  );
};

export default MypageQuestion;
