import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Container = styled.div`
  /* min-height: 60vh; */
  padding: 6rem;
  background-color: ${COLOR.WHITE};
  border: 0.1rem solid ${COLOR.WHITE};
  border-radius: 5rem;
  width: 80vw;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${COLOR.GRAY_100};
`;

export const PostInfo = styled.div``;

export const Options = styled.div`
  color: ${COLOR.GRAY_200};
`;

export const Title = styled.div`
  ${FONT.H3};
  margin-top: 1.2rem;
`;

export const Detail = styled.div`
  font-size: ${FONT.REGULAR_16};
  color: ${COLOR.GRAY_200};
  margin-top: 0.8rem;
  padding-bottom: 3rem;
`;

export const Content = styled.div`
  margin-top: 4rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & > button {
    margin: 0.5rem;
  }
`;
