import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const ButtonDiv = styled.div`
  position: absolute;
  left: 25%;
  bottom: -30%;
`;

export const MyImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

export const FileInput = styled.input`
  display: none;
`;
export const Label = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  line-height: 15rem;
  overflow: hidden;
  border-radius: 50%;
  text-align: center;
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
    ${FONT.BOLD_16};
    color: ${COLOR.WHITE};
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const MyImgDiv = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
  background-color: #e2e2e2;
  position: relative;
`;
