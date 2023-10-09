import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';

export const WorkBookCard = styled.article`
  width: 24rem;
  height: 35.2rem;
  padding: 2rem;
  background-color: ${COLOR.WHITE};
  border: 0.1rem solid ${COLOR.WHITE};
  border-radius: 1.6rem;
  box-shadow: ${SHADOW.CONTENTBOX_LG};
`;

export const Title = styled.div`
  ${FONT.H1}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Time = styled.div`
  font-size: ${FONT.REGULAR_12};
  color: #949494;
`;

export const Img = styled.div<{ category?: string }>``;

export const Description = styled.div`
  display: -webkit-box;
  margin-top: 2rem;
  font-size: ${FONT.REGULAR_14};
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
`;
