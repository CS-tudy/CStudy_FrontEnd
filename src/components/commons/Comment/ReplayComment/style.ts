import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Wrapper = styled.div`
  padding-left: 1rem;
  border-left: 1px solid ${COLOR.GRAY_100};
  margin-left: 0.625rem;
  margin-top: 1.25rem;
`;

export const Profile = styled.div`
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  & p {
    font-size: ${FONT.BOLD_18};
  }
`;
