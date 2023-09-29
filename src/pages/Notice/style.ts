import { Label } from './../../../../../old_front-end/CStudy-frontend/src/components/ContestDetail/AdminContestAddDeleteProblem/style';
import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

export const SearchInput = styled.input`
  width: 34.8rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  margin-right: 1rem;
  border: 1px solid #ededed;
`;

export const PaginationWrapper = styled.div`
  padding: 4rem 0 6rem;
`;

export const RadioContainer = styled.div`
  display: inline-block;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
`;

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  display: none; /* Hide the actual radio buttons */
`;

export const RadioLabel = styled.label`
  display: inline-block;
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
  font-size: 0;

  &:hover {
    background-color: #ddd;
  }

  ${RadioButton}:checked + & {
    background-color: #007bff;
    color: #fff;
  }

  /* Additional styling as needed */
`;
