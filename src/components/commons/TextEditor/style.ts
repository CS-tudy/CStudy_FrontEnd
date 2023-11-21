import styled from 'styled-components';
import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';
import { TextAreaStyleProps } from 'types/style';
import ReactQuill, { ReactQuillProps } from 'react-quill';

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${FONT.BOLD_20};
  margin-bottom: 0.7rem;
`;

export const TextArea = styled.textarea<TextAreaStyleProps>`
  margin-top: 1rem;
  padding: 1.2rem;
  font-size: ${FONT.REGULAR_18};
  border-radius: 0.4rem;
  border: 0.12rem solid ${COLOR.GRAY_80};
  resize: none;
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

interface StyledQuillProps extends ReactQuillProps {
  isRequest?: boolean;
  label?: string;
}

export const StyledQuill = styled(ReactQuill)<StyledQuillProps>`
  .ql-editor {
    font-size: ${props => (props.isRequest ? '1.8rem;' : '1.35rem;')};
  }
  .ql-container {
    background-color: ${COLOR.WHITE};
    border: 0.12rem solid ${COLOR.GRAY_80};
    height: ${props => (props.isRequest ? '500px' : '150px')};
  }
`;
