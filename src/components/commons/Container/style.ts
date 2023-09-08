import { COLOR } from 'constants/Color';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  height: 100%;
  background-color: #fff;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 20;
`;

export const ContentWrapper = styled.div`
  border: 2px solid ${COLOR.GRAY_50};
  background-color: #fff;
  border-radius: 1.2rem;
  display: flex;
  justify-content: center;
  margin: 0 5vw;
  padding: 5rem;
`;
