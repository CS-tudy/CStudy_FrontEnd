import { PropsWithChildren } from 'react';
import * as Styled from './style';
import TableHead from '../TableHead';

interface TableProps {
  colRate: string[];
  title: string[];
  white?: boolean;
  maxHeight?: boolean;
  narrow?: boolean;
  narrow2?: boolean;
}

const Table2 = ({
  colRate,
  title,
  maxHeight,
  children,
  white,
  narrow,
  narrow2,
}: PropsWithChildren<TableProps>) => {
  return (
    <Styled.Table
      cellSpacing={0}
      white={white}
      maxHeight={maxHeight}
      narrow={narrow}
      narrow2={narrow2}
    >
      <TableHead colRate={colRate} title={title} narrow={narrow} />
      <tbody>{children}</tbody>
    </Styled.Table>
  );
};

export default Table2;
