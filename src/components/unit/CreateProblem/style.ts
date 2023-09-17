import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { styled } from 'styled-components';

export const CPWrapper = styled.div`
  padding-top: 10rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const innerCP = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CpDiv = styled.div`
  padding: 3rem 6rem;
  border-radius: 1.2rem;
  background-color: rgb(219, 236, 244);
`;
export const CpTitle = styled.h2`
  padding-bottom: 5rem;
`;

export const CpForm = styled.form`
  display: flex;
`;

export const CpInputSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10rem;
  label {
    padding: 1.5rem;
  }
  input {
    padding: 1rem 5rem 1rem 1rem;
  }
  select {
    padding: 1rem 1rem;
    margin-bottom: 2rem;
  }
`;

export const CpInput = styled.div`
  display: flex;
  flex-direction: column;
  label {
    padding: 1.5rem;
  }
  input {
    padding: 1rem 5rem 1rem 1rem;
  }
`;

export const CpButton = styled.div`
  display: flex;
  button {
    margin: 2rem 2rem 0 0;
  }
`;

export const Ex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
