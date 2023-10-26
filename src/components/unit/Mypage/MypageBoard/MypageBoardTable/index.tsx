import React, { useMemo } from 'react';
import MypageBoardTbody from '../MypageBoardTbody';
import { statusMap } from 'types/mypage';
import Table2 from 'components/commons/Table2';

interface boardProps {
  handleDetail: (id: number) => void;
  status: statusMap;
}

const MypageBoardTable = ({ handleDetail, status }: boardProps) => {
  const tableColRate = useMemo(() => ['10%', '70%', '30%'], []);
  const tableTitle = useMemo(() => ['NO', '게시글 제목', '승인상태'], []);
  return (
    <Table2 colRate={tableColRate} title={tableTitle}>
      <MypageBoardTbody handleDetail={handleDetail} status={status} />
    </Table2>
  );
};

export default MypageBoardTable;
