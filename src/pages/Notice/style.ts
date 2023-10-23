import { COLOR } from 'constants/Color';
import styled from 'styled-components';

export const SearchWrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 3rem;
  width: 100%; */
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

export const Searchbar = styled.div`
  width: 387px;
  height: 45px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.input`
  /* width: 34.8rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  margin-right: 1rem;
  border: 1px solid ${COLOR.GRAY_200};
   */
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;

export const SearchIcon = styled.div`
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 6px;
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
