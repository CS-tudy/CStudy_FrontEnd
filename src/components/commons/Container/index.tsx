import React from 'react';
import * as S from './style';

const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <S.Wrapper style={{ position: 'relative' }}>
      <S.BodyWrapper>
        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
};

export default Container;
