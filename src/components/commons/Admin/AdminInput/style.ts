import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import { AdminInputStyleProps } from 'types/style';

export const AdminInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + & {
    margin-top: 2rem;
  }
`;

export const AdminBasicLabel = styled.label`
  ${FONT.BOLD_18}
`;

export const AdminBasicInput = styled.input<AdminInputStyleProps>`
  margin-top: 1rem;
  padding: 1.2rem;
  border: ${props =>
    props.errors[props.name]
      ? `0.1rem solid ${COLOR.RED}`
      : `0.1rem solid #dbdbdb`};
  border-radius: 0.4rem;
`;

export const AdminTextArea = styled.textarea<AdminInputStyleProps>`
  margin-top: 1rem;
  padding: 1.2rem;
  border: 0.1rem solid #dbdbdb;
  border-radius: 0.4rem;
  resize: none;
`;

export const AdminRadioLabel = styled.label`
  display: flex;
  align-items: center;
  ${FONT.BOLD_18}

  & > span {
    margin-left: 1.2rem;
  }
`;

export const AdminRadioInput = styled.input<AdminInputStyleProps>`
  appearance: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 3.5rem;
  min-height: 3.5rem;
  border: ${props =>
    props.errors[props.name]
      ? `0.2rem solid ${COLOR.RED}`
      : `0.2rem solid ${COLOR.WHITE}`};
  border-radius: 100%;
  box-shadow: ${SHADOW.CONTENTBOX_LG};
  &:checked {
  }
  &:checked::before {
    content: '';
    position: absolute;
    top: 65%;
    left: 70%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 3.2rem;
    height: 1rem;
    border-top: none;
    border-right: none;
    transform-origin: top left;
    border-top: none;
    border-right: none;
    transform-origin: top left;
    box-shadow: ${SHADOW.QUESTION};
    animation: start 0.3s ease forwards;
  }
  @keyframes start {
    0% {
      opacity: 0;
      width: 0;
      height: 0;
    }
    50% {
      opacity: 1;
      width: 0;
      height: 1rem;
    }
    100% {
      width: 3rem;
    }
  }
`;

export const AdminCheckboxLabel = styled(AdminRadioLabel)`
  justify-content: center;
`;

export const AdminCheckboxInput = styled(AdminRadioInput)``;
