import { COLOR } from 'constants/Color';
import styled from 'styled-components';

export const FormSectionWrapper = styled.div`
  & + & {
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding-top: 2rem;
    border-top: 0.2rem dashed ${COLOR.WHITE};
  }
`;

export const ContentBody = styled.div`
  padding-top: 2rem;
`;
