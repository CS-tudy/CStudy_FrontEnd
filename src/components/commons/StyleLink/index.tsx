import { PropsWithChildren } from 'react';
import { LinkProps } from 'react-router-dom';
import * as S from './style';

const StyleLink = ({ children, ...rest }: PropsWithChildren<LinkProps>) => {
  return <S.StyleLink {...rest}>{children}</S.StyleLink>;
};

export default StyleLink;
