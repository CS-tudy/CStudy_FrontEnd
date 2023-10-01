import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { styled } from 'styled-components';

export const MyInfoImg = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLOR.WHITE};
  border-radius: 1.2rem;
  border: 0.2rem;
  padding: 2rem 3rem;
  margin-top: 1rem;
  &:nth-child(2) {
    margin-left: 20rem;
  }
`;
export const MyImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

export const Form = styled.form``;

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

export const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
  height: 15rem;
  justify-content: space-evenly;
`;

export const MyId = styled.span`
  ${FONT.BOLD_18}
`;
export const MyEmail = styled.span`
  font-size: ${FONT.REGULAR_16};
`;

export const ButtonDiv = styled.div`
  position: absolute;
  left: -20%;
  top: -15%;
`;
