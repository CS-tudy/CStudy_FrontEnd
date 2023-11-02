import React, { useMemo } from 'react';
import MypageBoardTbody from '../MypageBoardTbody';
import { statusMap } from 'types/mypage';
import Table2 from 'components/commons/Table2';

interface boardProps {
  handleDetail: (id: number) => void;
  statusList: statusMap;
}

const MypageBoardTable = ({ handleDetail, statusList }: boardProps) => {
  const tableColRate = useMemo(() => ['10%', '70%', '30%'], []);
  const tableTitle = useMemo(() => ['NO', '게시글 제목', '승인상태'], []);
  return (
    <Table2 narrow2={true} colRate={tableColRate} title={tableTitle}>
      <MypageBoardTbody
        handleDetail={handleDetail}
        statusList={statusList as statusMap}
      />
    </Table2>
  );
};

export default MypageBoardTable;
