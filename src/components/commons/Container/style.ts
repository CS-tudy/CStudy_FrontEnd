import { COLOR } from 'constants/Color';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  height: 100%;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 20;
`;

export const ContentWrapper = styled.div`
  border: 2px solid ${COLOR.GRAY_50};
  display: flex;
  justify-content: center;
  margin: 0 5rem;
  padding: 5rem;
`;
