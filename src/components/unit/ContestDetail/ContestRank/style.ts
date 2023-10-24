import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Title = styled.div`
  font-size: ${FONT.H2};
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContestRanking = styled.div`
  width: 100%;
  padding: 2rem 4rem 3rem 3rem;
  background-color: #fff;
  border: 0.1rem solid #dbdbdb;
  border-radius: 1.2rem;
  margin-left: 3rem;
`;

export const RankingTitle = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${FONT.H2}

  & > span {
    font-size: ${FONT.BOLD_14};
    color: ${COLOR.GRAY_200};
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1rem;
  margin-top: 1.8rem;
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  margin-top: 1.8rem;
  display: flex;
  justify-content: center;
  margin-left: 30px;
`;
