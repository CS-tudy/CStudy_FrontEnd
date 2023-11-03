import { PropsWithChildren } from 'react';
import * as S from './style';

interface ContentBodyWrapper {
  blue?: boolean;
}

const ContentBodyWrapper = ({
  children,
  blue,
}: PropsWithChildren<ContentBodyWrapper>) => {
  return <S.Body>{children}</S.Body>;
};

export default ContentBodyWrapper;
