import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { media } from 'constants/media';

export const SelectBox = styled.div`
  position: relative;
  min-width: 13rem;
  height: 4.5rem;
  border-radius: 1.6rem;
  border: 1px solid ${COLOR.WHITE};
  background-color: ${COLOR.WHITE};
  border: 1px solid #dbdbdb;
  cursor: pointer;

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
    }
  }

  & + & {
    margin-left: 1rem;
  }

  ${media.mobileM} {
    min-width: 9.4rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: inherit;
  height: inherit;
  padding-left: 1.5rem;
  font-size: ${FONT.REGULAR_14};
  cursor: pointer;
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

export const OptionItem = styled.li`
  border-bottom: 0.1rem dashed ${COLOR.GRAY_100};
  padding: 0.5rem 1.5rem 0.5rem;
  font-size: ${FONT.REGULAR_14};
  color: ${COLOR.BLACK};

  &:hover {
    background: ${COLOR.MAIN};
    color: ${COLOR.WHITE};
  }

  &:last-child {
    border-bottom: 0 none;
  }
  border: 1px solid #dbdbdb;
`;
