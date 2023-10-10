import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

interface ApproveStatusStyleProps {
  isApproved?: boolean;
  small?: boolean;
}

export const ApproveStatus = styled.span<ApproveStatusStyleProps>`
  flex-shrink: 0;
  padding: ${({ small }) => (small ? '0.2rem 0.8rem' : '0.4rem 1.2rem')};
  border-radius: 5rem;
  background: ${({ isApproved }) => (isApproved ? COLOR.GREEN : COLOR.GRAY)};
  color: ${({ isApproved }) => (isApproved ? COLOR.WHITE : COLOR.BLACK)};
  ${({ small }) => (small ? FONT.REGULAR_14 : FONT.REGULAR_16)};
`;
