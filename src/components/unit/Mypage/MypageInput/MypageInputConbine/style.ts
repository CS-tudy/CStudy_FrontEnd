import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const PwdButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.8rem;
`;
export const Pwd = styled.div`
  display: flex;
  margin-bottom: 1.6rem;
`;

export const OldNewdPwd = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-child(2) {
    margin-left: 2.5rem;
  }
`;

export const PwdLabel = styled.label`
  ${FONT.BOLD_14}
`;

export const PwdInput = styled.input`
  margin-top: 1rem;
  padding: 1.2rem;
  font-size: 1.8rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #fff;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0.1rem 0.1rem 0.5rem,
    rgba(0, 0, 0, 0.15) 2rem 2rem 3rem -1.5rem,
    rgba(0, 0, 0, 0.15) 0.8rem 0.8rem 1rem -1rem inset;
`;

export const Error = styled.span`
  color: ${COLOR.RED};
`;

export const PwdDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const PwdInner = styled.div`
  background-color: #fff;
  padding: 6rem;
  border-radius: 2rem;
`;
