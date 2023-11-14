import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

interface Props {
  $white?: boolean;
  maxHeight?: boolean;
  $narrow?: boolean;
  rank?: number;
  rankFont?: number;
  $narrow2?: boolean;
}

export const Table = styled.table<Props>`
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight && '32rem'};
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 0 0 1px #dbdbdb;
  border-radius: ${({ $narrow }) => ($narrow ? '2rem' : '5rem')};
  border-radius: ${({ $narrow2 }) => $narrow2 && '2rem'};
`;

export const THeadTh = styled.th<Props>`
  padding: ${({ $narrow }) => ($narrow ? '2rem 0 1rem' : '4rem 0 2rem')};
`;

export const TBodyTd = styled.td<Props>`
  padding: ${({ $narrow }) => ($narrow ? '0' : '3rem 0')};
  padding: ${({ $narrow2 }) => $narrow2 && '1rem 0'};
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

  & span {
    display: inline-block;

    &.success {
      color: ${COLOR.MAIN};
    }

    &.failed {
      color: #ff8f00;
    }
  }

  &.title {
    ${FONT.BOLD_20}
    text-align: left;
    padding: ${({ $narrow }) => ($narrow ? '1.5rem 2rem' : '2rem 3rem')};

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
