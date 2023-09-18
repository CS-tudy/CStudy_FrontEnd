import { PropsWithChildren } from 'react';
import * as Styled from './style';

interface FilterProps {
  className?: string;
  onClick?: () => void;
}

const Filter = ({ children, ...rest }: PropsWithChildren<FilterProps>) => {
  return <Styled.Filter {...rest}>{children}</Styled.Filter>;
};

export default Filter;
