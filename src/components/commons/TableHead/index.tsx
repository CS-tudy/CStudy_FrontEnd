import { memo } from 'react';
import { THeadTh } from '../Table/style';

interface TableHeadProps {
  colRate: string[];
  title: string[];
  narrow?: boolean;
  narrow2?: boolean;
}

const TableHead = ({ colRate, title, narrow, narrow2 }: TableHeadProps) => {
  return (
    <>
      <colgroup>
        {colRate?.map((rate, index) => <col width={rate} key={index} />)}
      </colgroup>
      <thead>
        <tr>
          {title?.map((t, index) => (
            <THeadTh narrow={narrow} $narrow2={narrow2} key={index}>
              {t}
            </THeadTh>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default memo(TableHead);
