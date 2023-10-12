import React from 'react';
import * as S from './style';

const MiniContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <S.Wrapper>
      <S.BodyWrapper>
        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
};

export default MiniContainer;
