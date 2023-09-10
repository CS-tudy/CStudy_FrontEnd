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
  border: 0.1rem solid
    ${({ errors, id }) => (errors[id] ? `${COLOR.RED}` : `${COLOR.WHITE}`)};
  resize: none;
  border: 2px solid ${COLOR.GRAY_50};
`;
