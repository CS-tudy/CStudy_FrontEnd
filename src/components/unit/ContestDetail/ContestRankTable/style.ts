import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';

export const ContestRanking = styled.div`
  width: 100%;
  padding: 2rem 4rem 3rem 3rem;
  background-color: ${COLOR.WHITE};
  border: 0.2rem solid ${COLOR.WHITE};
  border-radius: 1.2rem;
  box-shadow: ${SHADOW.CONTENTBOX_XLG};
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
  background-color: ${COLOR.GRAY_50};
  box-shadow: ${SHADOW.RANKING_TABLE};
`;

export const PaginationWrapper = styled.div`
  margin-top: 1.8rem;
`;
