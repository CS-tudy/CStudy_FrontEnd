import { memo } from 'react';
import { THeadTh } from '../Table/style';

interface TableHeadProps {
  colRate: string[];
  title: string[];
  narrow?: boolean;
}

const TableHead = ({ colRate, title, narrow }: TableHeadProps) => {
  return (
    <>
      <colgroup>
        {colRate?.map((rate, index) => <col width={rate} key={index} />)}
      </colgroup>
      <thead>
        <tr>
          {title?.map((t, index) => (
            <THeadTh narrow={narrow} key={index}>
              {t}
            </THeadTh>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default memo(TableHead);
