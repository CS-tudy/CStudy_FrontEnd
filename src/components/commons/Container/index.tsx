import React from 'react';
import * as S from './style';

const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <S.Wrapper>
      <S.BodyWrapper>{children}</S.BodyWrapper>
    </S.Wrapper>
  );
};

export default Container;
