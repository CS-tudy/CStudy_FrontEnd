import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

// export const Modal = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// export const ModalTest = styled.div`
//   position: fixed;
//   top: 25vh;
//   left: 25%;
//   width: 50%;
//   height: 30%;
//   background-color: white;
//   padding: 1rem;
//   border-radius: 14px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
//   z-index: 120;
//   animation: slide-down 300ms ease-out forwards;
// `;

export const Container = styled.div`
  &:hover {
    background-color: ${COLOR.GRAY_50};
  }
`;

export const Article = styled.article`
  border-bottom: 0.1rem solid ${COLOR.GRAY_100};
  padding: 2.5rem;
`;

export const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  display: block;
  ${FONT.BOLD_20};
  white-space: nowrap;
  overflow: hidden;
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
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
  flex-basis: 100%;
  box-sizing: border-box;
`;

export const Detail = styled.div`
  font-size: ${FONT.REGULAR_14};
  color: ${COLOR.GRAY_200};
  margin-top: 1.2rem;
`;
