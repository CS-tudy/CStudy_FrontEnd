import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 12rem;
  width: 100%;
  height: 100%;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  /* padding-right: 5vw; */
`;

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

export const Select = styled.div`
  /* width: 11rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  margin-left: 1rem;
  border: 1px solid #ededed; */
  position: relative;
  /* min-width: 13rem;
  height: 4.5rem;
  border-radius: 1.6rem;
  border: 1px solid ${COLOR.WHITE};
  background-color: ${COLOR.WHITE};
  border: 1px solid #dbdbdb; */
  cursor: pointer;
  margin-left: 2rem;

  .arrow {
    display: inline-block;
    position: absolute;
    top: 20%;
    right: 1.3rem;
  }

  /* &::after {
    content: '';
    display: block;
    width: 0.1rem;
    height: 100%;
    position: absolute;
    top: 0;
    right: 3.5rem;
    background: ${COLOR.WHITE};
  } */

  &.active {
    .optionList {
      max-height: 50rem;
      transition: all 0.25s ease-in;
      opacity: 100;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const OptionList = styled.select`
  position: relative;
  min-width: 13rem;
  height: 4.5rem;
  border-radius: 1.6rem;
  border: 1px solid #fff;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  padding-left: 1.5rem;
  -webkit-appearance: none;
`;

export const OptionItem = styled.option`
  border-bottom: 0.1rem dashed #c4c4c4;
  padding: 0.5rem 1.5rem 0.5rem;
  font-size: 1.4rem;
  color: #000;
  border: 1px solid #dbdbdb;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20%;
  right: 0%;
  width: inherit;
  height: inherit;
  padding-left: 1.5rem;
  font-size: ${FONT.REGULAR_14};
  cursor: pointer;
`;
