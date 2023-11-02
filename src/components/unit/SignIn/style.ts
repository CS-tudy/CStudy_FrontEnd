import { FONT } from 'constants/Font';
import { COLOR } from './../../../constants/Color';
import { styled } from 'styled-components';

export const Input = styled.input`
  &:focus {
    border: 0.1rem solid #0078ff;
  }

  width: 33.6rem;
  height: 4rem;
  padding: 1rem;
  border: 0.1rem solid #d3d3d3;
  border-radius: 0.8rem;
  margin-top: 1rem;
`;

export const ErrorMessage = styled.div`
  display: block;

  & p {
    color: ${COLOR.RED};
    font-size: ${FONT.REGULAR_12};
    margin-top: 1rem;
  }
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

export const MovingLogin = styled.span`
  display: inline-block;
  color: ${COLOR.MAIN};
  font-size: 15px;
  margin-bottom: 0.5px;
`;
