import { FONT } from 'constants/Font';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MypageBoardWrapper = styled.div`
  margin-top: 4rem;
`;

export const MypageBoardInner = styled.div`
  margin-top: 1rem;
`;

export const BoardTitle = styled.h3`
  ${FONT.H2}
`;

export const BoardTable = styled.table`
  width: 100%;
  border: 1px solid #d2d2d2;
  border-radius: 1.2rem;
  border-collapse: separate;
`;

export const Thead = styled.th`
  padding: 1.5rem;
  ${FONT.BOLD_16}
`;

export const Tbody = styled.td`
  text-align: center;
  border-top: 0.1rem solid rgb(241, 242, 243);

  font-size: ${FONT.REGULAR_16};
  padding: 1rem 0;
`;
export const Tr = styled.tr`
  cursor: pointer;
`;
