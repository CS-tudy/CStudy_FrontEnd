import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { styled } from 'styled-components';

export const MyInfoImg = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLOR.WHITE};
  border-radius: 1.2rem;
  border: 0.2rem;
  padding: 2rem 3rem;
  margin-top: 1rem;
  &:nth-child(2) {
    margin-left: 13rem;
  }
`;

export const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
  height: 15rem;
  justify-content: space-evenly;
`;
