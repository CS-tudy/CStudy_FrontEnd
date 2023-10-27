import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

interface Props {
  $white?: boolean;
  maxHeight?: boolean;
  narrow?: boolean;
  $narrow2?: boolean;
  rank?: number;
  rankFont?: number;
}

export const Table = styled.table<Props>`
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight && '32rem'};
  border: 0.1rem solid ${COLOR.WHITE};
  border-radius: ${({ narrow }) => (narrow ? '2rem' : '5rem')};
`;

export const THeadTh = styled.th<Props>`
  padding: ${({ narrow }) => (narrow ? '2rem 0 1rem' : '4rem 0 2rem')};
  padding: ${({ $narrow2 }) => ($narrow2 ? '1rem 0 1rem' : '2rem 0')};
`;

export const TBodyTd = styled.td<Props>`
  padding: ${({ narrow }) => (narrow ? '0' : '3rem 0')};
  padding: ${({ $narrow2 }) => ($narrow2 ? '1rem 0 1rem' : '2rem 0')};
  background-size: ${({ rank }) => rank && '70%'};
  background-repeat: ${({ rank }) => rank && 'no-repeat'};
  background-position: ${({ rank }) => rank && 'center center'};
  text-align: center;
  border-top: ${({ $white }) =>
    $white ? `0.1rem solid ${COLOR.GRAY_50}` : `0.1rem solid ${COLOR.WHITE}`};
  vertical-align: middle;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-all;

  // 선 추가 할 수도 있어서 일단 추가
  /* & + & {
        border-left: 0.1rem solid ${COLOR.WHITE};
    } */

  & span {
    display: inline-block;
    /* padding: 0.5rem 2rem; */

    /* color: ${COLOR.WHITE};
    border-radius: 5rem;
    border: 0.1rem solid ${COLOR.WHITE}; */

    &.success {
      /* background-color: ${COLOR.MAIN}; */
      color: ${COLOR.MAIN};
    }

    &.failed {
      /* background-color: ${COLOR.RED}; */
      color: #ff8f00;
    }
  }

  &.title {
    ${FONT.BOLD_20}
    text-align: left;
    padding: ${({ narrow }) => (narrow ? '1.5rem 2rem' : '2rem 3rem')};

    /* a:hover {
      transition: all 0.2s ease-in-out;
    } */

    &.center {
      text-align: center;
    }
  }

  &.bold {
    ${FONT.BOLD_20}
    padding: 0;

    a {
      display: block;
      padding: 2rem 3rem;
    }
    }
  }

  &.white {
    background-color: ${COLOR.WHITE};
  }
`;

export const TBodyTh = styled.th<Props>`
  text-align: center;
  padding: 2rem 0;
  border-top: ${({ $white }) =>
    $white ? `0.1rem solid ${COLOR.GRAY_50}` : `0.1rem solid ${COLOR.WHITE}`};
  vertical-align: middle;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-all;
`;
