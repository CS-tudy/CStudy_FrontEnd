import styled from 'styled-components';
// import { Field as InputField } from 'components/@shared/Input/style';
// import { Field as TextAreaField } from './../../components/@shared/TextArea/style';
import { COLOR } from 'constants/Color';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6rem;
  border: 0.1rem solid ${COLOR.WHITE};
  border-radius: 5rem;
`;

export const ButtonWrapper = styled.div`
  margin: 3rem 0 0 auto;

  button + button {
    margin-left: 2rem;
  }
`;
