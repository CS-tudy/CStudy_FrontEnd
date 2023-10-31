import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${COLOR.GRAY_50};
  padding: 1.5rem 2rem;
  border-top: 0.1rem solid ${COLOR.GRAY_100};
`;

export const CopyWrite = styled.span`
  font-size: ${FONT.REGULAR_14};
  color: ${COLOR.GRAY_200};
`;
