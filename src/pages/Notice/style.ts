import { COLOR } from 'constants/Color';
import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 3rem;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 34.8rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  margin-right: 1rem;
  border: 1px solid ${COLOR.GRAY_200};
`;

export const PaginationWrapper = styled.div`
  padding: 4rem 0 6rem;
`;

export const Select = styled.select`
  width: 11rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  margin-left: 1rem;
  border: 1px solid #ededed;
`;
