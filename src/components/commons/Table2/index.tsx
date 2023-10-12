import { PropsWithChildren } from 'react';
import * as Styled from './style';
import TableHead from '../TableHead';

interface TableProps {
  colRate: string[];
  title: string[];
  white?: boolean;
  maxHeight?: boolean;
  narrow?: boolean;
}

const Table2 = ({
  colRate,
  title,
  maxHeight,
  children,
  white,
  narrow,
}: PropsWithChildren<TableProps>) => {
  return (
    <Styled.Table
      cellSpacing={0}
      white={white}
      maxHeight={maxHeight}
      narrow={narrow}
    >
      <TableHead colRate={colRate} title={title} narrow={narrow} />
      <tbody>{children}</tbody>
    </Styled.Table>
  );
};

export default Table2;
