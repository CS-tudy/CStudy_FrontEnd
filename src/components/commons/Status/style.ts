import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

interface ApproveStatusStyleProps {
  isApproved?: boolean;
  small?: boolean;
}

export const ApproveStatus = styled.span<ApproveStatusStyleProps>`
  flex-shrink: 0;
  padding: ${({ small }) => (small ? '0.3rem 1rem' : '0.5rem 1.5rem')};
  border-radius: 5rem;
  background: ${({ isApproved }) => (isApproved ? COLOR.GREEN : COLOR.GRAY)};
  color: ${({ isApproved }) => (isApproved ? COLOR.WHITE : COLOR.BLACK)};
  ${({ small }) => (small ? FONT.BOLD_14 : FONT.BOLD_18)};
`;
