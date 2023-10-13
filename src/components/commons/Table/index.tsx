import { PropsWithChildren } from 'react';
import * as S from './style';
import TableHead from '../TableHead';

interface TableProps {
  colRate: string[];
  title: string[];
  white?: boolean;
  maxHeight?: boolean;
  narrow?: boolean;
}

const Table = ({
  colRate,
  title,
  maxHeight,
  children,
  white,
  narrow,
}: PropsWithChildren<TableProps>) => {
  return (
    <S.Table
      cellSpacing={0}
      white={white}
      maxHeight={maxHeight}
      narrow={narrow}
    >
      <TableHead colRate={colRate} title={title} narrow={narrow} />
      <tbody>{children}</tbody>
    </S.Table>
  );
};

export default Table;
