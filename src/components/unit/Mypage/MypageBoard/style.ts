import { FONT } from 'constants/Font';
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
  background-color: rgb(255, 255, 255);
  border: 0.1rem solid rgb(255, 255, 255);
  border-radius: 2rem;
`;

export const Thead = styled.th`
  padding: 2rem 0 1rem;
`;

export const Tbody = styled.td`
  text-align: center;
  border-top: 0.1rem solid rgb(241, 242, 243);
`;
