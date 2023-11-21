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

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${COLOR.GRAY_100};
`;

export const PostInfo = styled.div`
  margin-left: 1rem;
`;

export const Options = styled.div`
  color: ${COLOR.GRAY_200};
  margin-right: 1rem;

  & > button {
    margin: 0.3rem;
  }
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

export const Span = styled.span`
  display: inline-block;
  margin: 0 3px 6px 3px;
`;

export const Content = styled.div`
  margin: 5rem 0 1rem 1rem;
  word-wrap: break-word;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem & > button {
    margin: 0.5rem;
  }
`;
