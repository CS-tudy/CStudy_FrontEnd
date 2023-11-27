import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Container = styled.div`
  &:hover {
    background-color: #f8f8f8;
  }
`;

export const Article = styled.article`
  padding: 2.8rem 2.5rem;
  border-bottom: 0.1rem solid ${COLOR.GRAY_100};
  width: 80vw;
`;

export const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  display: block;
  margin-left: 1rem;
  ${FONT.BOLD_20};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const description = styled.div`
  margin-top: 1rem;
  font-size: ${FONT.REGULAR_16};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ContentWrapper = styled.ul`
  margin-top: 1rem;
  font-size: ${FONT.REGULAR_16};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Content = styled.li`
  padding: 22px 20px;
  width: 100%;
  flex-basis: 100%;
  box-sizing: border-box;
`;

export const Detail = styled.div`
  display: flex;
  font-size: ${FONT.REGULAR_14};
  color: ${COLOR.GRAY_200};
  margin-top: 1.2rem;
`;
