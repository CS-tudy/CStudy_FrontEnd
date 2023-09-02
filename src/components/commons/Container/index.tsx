import React from 'react';
import * as S from './style';

const Container = ({ children }: React.PropsWithChildren) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Container;
