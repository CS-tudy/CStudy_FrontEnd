import { PropsWithChildren } from 'react';
import * as S from './style';

interface FilterProps {
  className?: string;
  onClick?: () => void;
}

const Filter = ({ children, ...rest }: PropsWithChildren<FilterProps>) => {
  return <S.Filter {...rest}>{children}</S.Filter>;
};

export default Filter;
