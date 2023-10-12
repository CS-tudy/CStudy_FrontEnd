import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';

export const WorkBookCard = styled.article`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid #dce1e5;
  border-radius: 16px;
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
  display: flex;
  min-height: 210px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 24px;
`;
