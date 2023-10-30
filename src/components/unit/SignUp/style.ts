import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Input = styled.input`
  &:focus {
    border: 0.16rem solid ${COLOR.GRAY_100};
    outline: none;
  }

  width: 33.6rem;
  height: 4rem;
  padding: 1rem;
  border: 0.1rem solid #d3d3d3;
  border-radius: 0.8rem;
  margin-top: 1rem;
`;

export const ErrorMessage = styled.div`
  color: ${COLOR.RED};
  margin-top: 1rem;
  margin-left: 0.5rem;
  font-size: ${FONT.REGULAR_12};
`;

export const Button = styled.button`
  width: 33.6rem;
  height: 4.8rem;
  border-radius: 0.8rem;
  background: ${COLOR.MAIN};
  color: white;
  margin-top: 1rem;
`;

export const Suggestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const TextSuggestionLabel = styled.span`
  font-size: ${FONT.REGULAR_14};
  padding-right: 1rem;
`;

export const ButtonInsideInput = styled.button`
  position: absolute;
  right: 0.8rem;
  top: 1.8rem;
  background-color: ${COLOR.GRAY};
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
`;

export const MovingLogin = styled.span`
  display: inline-block;
  color: ${COLOR.MAIN};
  font-size: 15px;
  margin-bottom: 0.5px;
`;
