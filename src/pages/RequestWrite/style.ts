import styled from 'styled-components';
import { COLOR } from 'constants/Color';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5vw;
  border: 0.1rem solid ${COLOR.WHITE};
  border-radius: 5rem;
`;

export const Div = styled.div`
  height: 20px;
`;

export const ButtonWrapper = styled.div`
  margin: 2.5rem 0 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;

  button + button {
    margin-left: 2rem;
  }
`;
