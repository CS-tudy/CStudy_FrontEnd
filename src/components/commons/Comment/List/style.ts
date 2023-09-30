import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Wrapper = styled.div`
  padding-left: 1rem;
  margin-left: 0.625rem;

  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const ProfileContainer = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-top: 1px solid ${COLOR.GRAY_100};
  border-bottom: 1px solid ${COLOR.GRAY_100};
`;

export const Profile = styled.div`
  & p {
    font-size: ${FONT.BOLD_18};
  }
`;
