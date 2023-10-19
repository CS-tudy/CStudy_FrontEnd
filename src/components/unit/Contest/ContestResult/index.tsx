import { IContestResult } from 'types/api';
import * as Styled from './style';

interface ContestResultProps {
  contestResult: IContestResult;
}

const ContestResult = ({ contestResult }: ContestResultProps) => {
  const correctDetails = contestResult?.details?.filter(
    detail => detail.correct,
  );
  const wrongDetails = contestResult?.details?.filter(
    detail => !detail.correct,
  );

  const questions =
    correctDetails &&
    wrongDetails &&
    [...correctDetails, ...wrongDetails]?.sort(
      (a, b) => a.questionId - b.questionId,
    );

  return (
    <>
      {contestResult ? (
        <>
          <Styled.RecordTitle>
            성적
            <span>
              {' '}
              (70% 이상인 경우 녹색으로, 그렇지 않으면 빨간색으로 표시됩니다.)
            </span>
          </Styled.RecordTitle>
          <Styled.ProgressBarContainer>
            <Styled.ProgressBar
              score={contestResult?.score}
              total={contestResult?.total}
            />
          </Styled.ProgressBarContainer>
          <Styled.ScoreIndicator>
            <Styled.Correct>
              맞은 개수:
              {contestResult?.score}
            </Styled.Correct>
            <Styled.Wrong>
              틀린 개수:
              {contestResult?.total - contestResult?.score}
            </Styled.Wrong>
          </Styled.ScoreIndicator>
          <Styled.ResultListContainer>
            <Styled.ResultProblemWrapper>
              <Styled.ResultProblemTitle>맞은 문제</Styled.ResultProblemTitle>
              <Styled.ResultList>
                {questions?.map(
                  (detail, index) =>
                    detail.correct && (
                      <Styled.ListItem key={index}>
                        <Styled.QuestionTitle>
                          문제 {index + 1}
                        </Styled.QuestionTitle>
                        <Styled.ChoiceLabel correct={detail.correct}>
                          선택한 정답: {detail.choiceNumber}
                        </Styled.ChoiceLabel>
                      </Styled.ListItem>
                    ),
                )}
              </Styled.ResultList>
            </Styled.ResultProblemWrapper>
            <Styled.ResultProblemWrapper>
              <Styled.ResultProblemTitle>틀린 문제</Styled.ResultProblemTitle>
              <Styled.ResultList>
                {questions?.map(
                  (detail, index) =>
                    !detail.correct && (
                      <Styled.ListItem key={index}>
                        <Styled.QuestionTitle>
                          문제 {index + 1}
                        </Styled.QuestionTitle>
                        <Styled.ChoiceLabel correct={detail.correct}>
                          선택한 정답: {detail.choiceNumber}
                        </Styled.ChoiceLabel>
                      </Styled.ListItem>
                    ),
                )}
              </Styled.ResultList>
            </Styled.ResultProblemWrapper>
          </Styled.ResultListContainer>
        </>
      ) : (
        <div>대회에 참여한 이력이 없습니다.</div>
      )}
    </>
  );
  //   };
};

export default ContestResult;
