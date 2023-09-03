import { COLOR } from 'constants/Color';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const BodyWrapper = styled.div`
  margin: 5rem;
  border: 2px solid ${COLOR.GRAY_50};
  display: flex;
  justify-content: center;
`;
