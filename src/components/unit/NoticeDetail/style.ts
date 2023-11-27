import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Container = styled.div`
  padding: 6rem 5vw;
  background-color: ${COLOR.WHITE};
  border: 0.1rem solid ${COLOR.WHITE};
  border-radius: 5rem;
  width: 80vw;
`;

export const Title = styled.div`
  ${FONT.H3};
  margin-top: 1.2rem;
`;

export const Detail = styled.div`
  font-size: ${FONT.REGULAR_16};
  color: ${COLOR.GRAY_200};
  margin-top: 0.8rem;
  border-bottom: 0.1rem solid ${COLOR.GRAY_100};
  padding-bottom: 3rem;
`;

export const Content = styled.div`
  font-size: ${FONT.REGULAR_16};
  margin-top: 4rem;
  word-wrap: break-word;
`;

export const CommentWrapper = styled.div`
  margin: 3rem 5vw;
`;
