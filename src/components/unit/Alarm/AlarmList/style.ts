import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const AlarmList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${FONT.REGULAR_14};
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 220px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLOR.GRAY_100};
    border-radius: 30px;
  }
`;

export const AlarmItem = styled.div`
  padding: 13px;
  margin: 5px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid ${COLOR.GRAY_80};
  /* box-shadow: 1px 1px 2px 0.5px rgba(0, 0, 0, 0.1); */
`;

export const Content = styled.div``;

export const ItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Created = styled.div`
  font-size: ${FONT.REGULAR_12};
  color: ${COLOR.GRAY_200};
  padding-top: 10px;
`;

export const DeleteButton = styled.button`
  display: inline-block;
  margin-top: 8px;
`;

export const NoAlarm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
