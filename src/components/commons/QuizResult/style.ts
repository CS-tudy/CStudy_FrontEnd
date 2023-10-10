import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const RecordTitle = styled.h3`
  ${FONT.H3}

  span {
    font-size: ${FONT.REGULAR_14};
    color: ${COLOR.GRAY_200};
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${COLOR.GRAY_50};
  border-radius: 1rem;
  padding: 0.5rem;
`;

export const ProgressBar = styled.div<{ score: number; total: number }>`
  width: ${({ score, total }) => (score / total) * 100}%;
  background-color: ${({ score, total }) =>
    (score / total) * 100 > 70 ? COLOR.GREEN : COLOR.RED};
  border-radius: 0.8rem;
  padding: 0.5rem;
  transition: width 1s ease;
`;

export const ScoreIndicator = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: 1.2rem;

  p + p {
    margin-left: 0.8rem;
  }
`;

export const Correct = styled.p`
  color: ${COLOR.GREEN};
  font-weight: bold;
`;

export const Wrong = styled.p`
  color: ${COLOR.RED};
  font-weight: bold;
`;

export const ResultListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
`;

export const ResultProblemWrapper = styled.div`
  flex: 1;
`;

export const ResultProblemTitle = styled.h3`
  ${FONT.H3}
  margin-left: 0.8rem;
`;

export const ResultList = styled.ul`
  display: flex;
  margin-top: 0.8rem;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  background-color: ${COLOR.GRAY_50};
  border-radius: 0.8rem;
  padding: 1rem;
  margin: 0.4rem 0.8rem;
`;

export const QuestionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: ${COLOR.BLACK};
`;

export const ChoiceLabel = styled.span<{ correct?: boolean }>`
  font-weight: bold;
  color: ${({ correct }) => (correct ? COLOR.GREEN : COLOR.RED)};
`;
