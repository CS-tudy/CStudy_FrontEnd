import { css, DefaultTheme } from 'styled-components';
import { MouseEvent } from 'react';
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
  type?: string;
  onClick?: (event: MouseEvent) => void;
};
