import styled, { css } from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

interface ChildCommentProps {
  isFirst: boolean;
}

interface ChildCommentCurrent {
  currentDepth: number;
}

export const Container = styled.div<ChildCommentCurrent>`
  padding: ${({ currentDepth }) => (currentDepth === 1 ? '0 2rem' : undefined)};
  margin-bottom: ${({ currentDepth }) =>
    currentDepth === 0 ? '3rem' : undefined};
`;

export const Profile = styled.div<ChildCommentCurrent>`
  margin-bottom: 10px;
  border-bottom: ${({ currentDepth }) =>
    currentDepth > 0 ? '1px dashed  hsla(220, 9%, 46%, 0.3)' : undefined};
`;

export const Pheader = styled.div`
  font-size: ${FONT.REGULAR_16};
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Pcontent = styled.div`
  margin-bottom: 10px;
  font-size: ${FONT.REGULAR_14};
  padding: 2rem 0rem 0.5rem 1rem;
`;

export const ReplyButton = styled.button`
  padding: 5px 0;
  color: ${COLOR.GRAY_200};
  border: none;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  padding: 5px 0;
  color: ${COLOR.GRAY_200};
  border: none;
  cursor: pointer;
`;

export const ShowMoreReplies = styled.div`
  color: ${COLOR.GRAY_200};
  cursor: pointer;
`;

export const ReplyContainer = styled.div``;

export const ChildComments = styled.div<ChildCommentCurrent>`
  border-left: ${({ currentDepth }) =>
    currentDepth === 0 ? '1px solid hsla(220, 9%, 46%, 0.3)' : undefined};
`;
