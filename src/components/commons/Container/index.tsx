import React from 'react';
import * as S from './style';

interface ContainerProps {
  children: JSX.Element | JSX.Element[] | null;
  padding?: boolean;
}

const Container = ({ children, padding }: ContainerProps) => {
  return (
    <S.Wrapper>
      <S.BodyWrapper>
        <S.ContentWrapper padding={padding}>{children}</S.ContentWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
};

export default Container;
