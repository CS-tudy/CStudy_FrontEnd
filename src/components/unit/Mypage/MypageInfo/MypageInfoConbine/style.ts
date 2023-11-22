import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { media } from 'constants/media';
import { styled } from 'styled-components';

export const MyInfoImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: ${COLOR.WHITE};
  border-radius: 1.2rem;
  border: 0.2rem;
  padding: 2rem 3rem;
  margin-top: 1rem;
  &:nth-child(2) {
    margin-left: 13rem;
  }
  margin-bottom: 3rem;
  ${media.custom(410)} {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  height: 15rem;
  justify-content: space-evenly;
  ${media.custom(410)} {
    margin-top: 6rem;
    margin-left: 0;
  }
`;
