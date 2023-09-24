import { css } from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
// import { SHADOW } from 'constants/Shadow';

export const ButtonLinkSharedStyles = css`
  display: inline-block;
  padding: 0.8rem 1.2rem;
  font-size: ${FONT.REGULAR_16};
  border-radius: 1rem;

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    background-color: ${COLOR.GRAY_100} !important;
  }

  &.bold {
    ${FONT.BOLD_16}
  }

  &.style {
    text-shadow: 0.1rem 0.1rem 0.2rem ${COLOR.GRAY_200};
  }

  &.navy.style {
    text-shadow: 0.1rem 0.1rem 0.2rem ${COLOR.GRAY_200};
  }

  &.white.style,
  &.revert.style,
  &.revert--red,
  &.revert--green {
    text-shadow: none;
  }

  &.mt-sm {
    margin-top: 0.8rem;
  }

  &.mt {
    margin-top: 1.6rem;
  }

  &.ml {
    margin-left: 0.8rem;
  }

  &.lg {
    padding: 1rem 1.4rem;
  }

  &.xl {
    padding: 1.2rem 1.6rem;
  }

  &.xl.wide {
    padding: 1.2rem 4.2rem;
  }

  &.xl2 {
    padding: 1.4rem 1.8rem;
  }

  &.fs--sm {
    font-size: ${FONT.REGULAR_14};
  }

  &.fs--lg {
    font-size: ${FONT.REGULAR_18};
  }

  &.fs--xl {
    font-size: ${FONT.REGULAR_20};
  }

  &.navy {
    background-color: ${COLOR.MAIN};
    color: ${COLOR.WHITE};
  }

  &.white {
    background-color: ${COLOR.WHITE};
  }

  &.gray {
    background-color: ${COLOR.GRAY_200};
    color: ${COLOR.WHITE};
  }

  &.green {
    background-color: ${COLOR.GREEN};
    color: ${COLOR.WHITE};
  }

  &.red {
    background-color: ${COLOR.RED};
    color: ${COLOR.WHITE};
  }

  &.w-half {
    width: 50%;
  }

  &.w-full {
    width: 100%;
  }

  &.revert {
    border: 0.1rem solid ${COLOR.MAIN};
    color: ${COLOR.MAIN};
  }

  &.revert--green {
    border: 0.1rem solid ${COLOR.GREEN};
    color: ${COLOR.GREEN};
  }

  &.revert--red {
    border: 0.1rem solid ${COLOR.RED};
    color: ${COLOR.RED};
  }
`;
