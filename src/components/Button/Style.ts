import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
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
};

const sizeCSS: SizeCSS = {
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
    font-size: ${FONT.REGULAR_18};
  `,
};

export const Button = styled.button<ButtonComponent>`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  padding: 1.2rem 1.6rem;
  border-radius: 1rem;
  &:hover {
    opacity: 0.8;
  }
`;