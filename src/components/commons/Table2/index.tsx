import { PropsWithChildren } from 'react';
import * as S from './style';
import TableHead2 from '../TableHead2';

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
    <S.Table
      cellSpacing={0}
      $white={white}
      maxHeight={maxHeight}
      $narrow={narrow}
      $narrow2={narrow2}
    >
      <TableHead2
        colRate={colRate}
        title={title}
        narrow={narrow}
        narrow2={narrow2}
      />
      <tbody>{children}</tbody>
    </S.Table>
  );
};

export default Table2;
