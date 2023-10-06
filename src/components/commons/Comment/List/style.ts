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
  border-bottom: 1px solid ${COLOR.GRAY_100};
`;

export const ReplayContainer = styled.div`
  margin-left: 0.625rem;
  margin-top: 1.25rem;
  padding-left: 2.1rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -1%;
    left: 0%;
    width: 1px;
    height: 90%;
    border-left: 1px dotted ${COLOR.GRAY_100};
  }
`;

export const Profile = styled.div`
  & p {
    font-size: ${FONT.BOLD_18};
  }
`;

export const Pheader = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: ${FONT.BOLD_20};
  }
`;
export const Pboay = styled.div`
  padding: 1.1rem;
  p {
    font-size: ${FONT.BOLD_16};
  }
`;
