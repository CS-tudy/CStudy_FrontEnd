import { css, DefaultTheme } from 'styled-components';

export interface VariantCSS {
  [key: string]: ReturnType<typeof css>;
}

export interface SizeCSS {
  [key: string]: ReturnType<typeof css>;
}

export type ButtonComponent = {
  variant: keyof VariantCSS;
  size: keyof SizeCSS;
  theme?: DefaultTheme;
  children?: React.ReactNode;
};
