import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const AdminWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1.6rem;

  a + button {
    margin-left: 1.2rem;
  }
`;

export const CreateInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: ${FONT.REGULAR_14};
  color: ${COLOR.GRAY_100};
  & button {
    margin-top: 1rem;
  }
`;
export const PaginationWrapper = styled.div`
  padding: 4rem 0 6rem;
`;
