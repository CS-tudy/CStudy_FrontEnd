import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { Link } from 'react-router-dom';
import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonComponent, SizeCSS, VariantCSS } from 'types/button';

const variantCSS: VariantCSS = {
  primary: css`
    background: ${COLOR.MAIN};
    color: ${COLOR.WHITE};
  `,

  'primary-text': css`
    background: none;
    color: ${COLOR.WHITE};
  `,
  'primary-disabled': css`
    background: #edededed;
    color: ${COLOR.WHITE};
  `,

  gray: css`
    background: ${COLOR.GRAY};
    color: ${COLOR.BLACK};
    border: 1px solid #dbdbdb;
  `,

  green: css`
    background: ${COLOR.GREEN};
    color: ${COLOR.WHITE};
  `,

  white: css`
    background: ${COLOR.WHITE};
    color: ${COLOR.BLACK};
    border: 1px solid #dbdbdb !important;
  `,
};

const sizeCSS: SizeCSS = {
  not: css`
    font-size: ${FONT.REGULAR_12};
  `,

  small: css`
    width: 64px;
    font-size: ${FONT.REGULAR_12};
  `,

  medium: css`
    width: 96px;
    font-size: ${FONT.REGULAR_14};
  `,

  large: css`
    width: 128px;
    font-size: ${FONT.REGULAR_16};
    font-weight: ${FONT.BOLD_12};
  `,

  full: css`
    width: 100%;
    font-size: ${FONT.REGULAR_14};
  `,
};

export const LinkButton = styled(Link)<ButtonComponent>`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
  border: none;
  display: inline-flex;
  justify-content: center;
  padding: 1.2rem 1.6rem;
  border-radius: 1rem;
  &:hover {
    opacity: 0.8;
    color: #fff;
  }
  & + button {
    margin-left: 1.1rem;
  }

  & + & {
    margin-left: 1.1rem;
  }
`;
