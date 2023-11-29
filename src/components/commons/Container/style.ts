import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
`;

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div<{ padding?: boolean }>`
  border: 1px solid #dbdbdb;
  background-color: #fff;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5vw;
  /* padding: 5vw; */
  padding: ${({ padding }) => (padding ? '5vw' : '0')};
`;
