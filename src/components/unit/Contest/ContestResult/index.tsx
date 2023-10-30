import { IContestResult } from 'types/api';
import * as S from './style';

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
          <S.RecordTitle>
            성적
            <span>
              {' '}
              (70% 이상인 경우 녹색으로, 그렇지 않으면 빨간색으로 표시됩니다.)
            </span>
          </S.RecordTitle>
          <S.ProgressBarContainer>
            <S.ProgressBar
              score={contestResult?.score}
              total={contestResult?.total}
            />
          </S.ProgressBarContainer>
          {/* <S.ScoreIndicator>
            <S.Correct>
              맞은 개수:
              {contestResult?.score}
            </S.Correct>
            <S.Wrong>
              틀린 개수:
              {contestResult?.total - contestResult?.score}
            </S.Wrong>
          </S.ScoreIndicator> */}
          <S.ResultListContainer>
            <S.ResultProblemWrapper>
              <S.ResultProblemTitle>
                맞은 문제
                <S.ResultNumber>{contestResult?.score}개</S.ResultNumber>
              </S.ResultProblemTitle>
              <S.ResultList>
                {questions?.map(
                  (detail, index) =>
                    detail.correct && (
                      <S.ListItem key={index}>
                        <S.QuestionTitle>문제 {index + 1}</S.QuestionTitle>
                        <S.ChoiceLabel correct={detail.correct}>
                          선택한 정답: {detail.choiceNumber}
                        </S.ChoiceLabel>
                      </S.ListItem>
                    ),
                )}
              </S.ResultList>
            </S.ResultProblemWrapper>
            <S.ResultProblemWrapper>
              <S.ResultProblemTitle>
                틀린 문제
                <S.ResultNumber>
                  {contestResult?.total - contestResult?.score}개
                </S.ResultNumber>
              </S.ResultProblemTitle>
              <S.ResultList>
                {questions?.map(
                  (detail, index) =>
                    !detail.correct && (
                      <S.ListItem key={index}>
                        <S.QuestionTitle>문제 {index + 1}</S.QuestionTitle>
                        <S.ChoiceLabel correct={detail.correct}>
                          선택한 정답: {detail.choiceNumber}
                        </S.ChoiceLabel>
                      </S.ListItem>
                    ),
                )}
              </S.ResultList>
            </S.ResultProblemWrapper>
          </S.ResultListContainer>
        </>
      ) : (
        <div>대회에 참여한 이력이 없습니다.</div>
      )}
    </>
  );
  //   };
};

export default ContestResult;
