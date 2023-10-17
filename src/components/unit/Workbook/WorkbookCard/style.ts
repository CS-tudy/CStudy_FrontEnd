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
  ${FONT.BOLD_20};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
  color: ${COLOR.BLACK};
  letter-spacing: -0.01em;
  line-height: 1.5;
`;

export const Time = styled.div`
  font-size: ${FONT.REGULAR_12};
  color: #949494;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #dce1e5;
  margin-top: auto;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  min-height: 210px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 24px;
`;

export const Description = styled.div``;
