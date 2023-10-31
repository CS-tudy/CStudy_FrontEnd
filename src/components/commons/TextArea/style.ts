import styled from 'styled-components';
import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';
import { TextAreaStyleProps } from 'types/style';

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${FONT.BOLD_20};
`;

export const TextArea = styled.textarea<TextAreaStyleProps>`
  margin-top: 1rem;
  padding: 1.2rem;
  font-size: ${FONT.REGULAR_18};
  border-radius: 0.4rem;
  border: 0.12rem solid
    ${({ errors, id }) =>
      errors[id] ? `${COLOR.GRAY_80}` : `${COLOR.GRAY_80}`};
  resize: none;
  /* border: 0.12rem solid ${COLOR.GRAY_80}; */
  &:focus {
    border: 0.16rem solid ${COLOR.GRAY_100};
    outline: none;
  }
`;

export const ErrorMsg = styled.span`
  font-size: ${FONT.REGULAR_14};
  color: ${COLOR.RED};
  padding-top: 0.5rem;
`;
