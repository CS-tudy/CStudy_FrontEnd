import { PropsWithChildren } from 'react';
import * as S from './style';

const NoData = ({ children, ...rest }: PropsWithChildren) => {
  return <S.NoDataContainer {...rest}>{children}</S.NoDataContainer>;
};

export default NoData;
