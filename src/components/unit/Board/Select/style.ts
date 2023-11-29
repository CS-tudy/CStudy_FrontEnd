import styled from 'styled-components';
import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';
import { media } from 'constants/media';

export const Select = styled.div`
  position: relative;
  min-width: 13rem;
  height: 4.5rem;
  border-radius: 1.6rem;
  border: 1px solid ${COLOR.WHITE};
  background-color: ${COLOR.WHITE};
  border: 1px solid #dbdbdb;
  cursor: pointer;
  transition: all 0.25s ease-in;
  .arrow {
    display: inline-block;
    position: absolute;
    top: 20%;
    right: 1.3rem;
  }

  &::after {
    content: '';
    display: block;
    width: 0.1rem;
    height: 100%;
    position: absolute;
    top: 0;
    right: 3.5rem;
    background: ${COLOR.WHITE};
  }

  &.active {
    .optionList {
      max-height: 50rem;
      transition: all 0.25s ease-in;
      opacity: 100;
      visibility: visible;
    }
  }

  ${media.mobileM} {
    min-width: 9.4rem;
  }
`;

export const OptionList = styled.ul`
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
  background: ${COLOR.WHITE};
  color: #fff;
  list-style-type: none;
  padding: 0;
  border-radius: 0.6rem;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #303030;
    border-radius: 4.5rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
  }
  border: 1px solid #dbdbdb;
  z-index: 1;
`;

export const OptionItem = styled.li<{ selected: boolean }>`
  border-bottom: 0.1rem dashed #c4c4c4;
  padding: 0.5rem 1.5rem 0.5rem;
  font-size: 1.4rem;
  color: #000;
  border: 1px solid #dbdbdb;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  left: 0%;
  width: 100%;
  width: inherit;
  height: inherit;
  padding-left: 1.5rem;
  font-size: 1.4rem;
  cursor: pointer;
`;
