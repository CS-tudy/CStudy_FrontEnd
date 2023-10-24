import React from 'react';
import MypageBoardTbody from '../MypageBoardTbody';
import { statusMap } from 'types/mypage';
import Table2 from 'components/commons/Table2';

interface boardProps {
  handleDetail: (id: number) => void;
  status: statusMap;
}
const MypageBoardTable = ({ handleDetail, status }: boardProps) => {
  return (
    <Table2
      colRate={['10%', '70%', '30%']}
      title={['NO', '게시글 제목', '승인상태']}
    >
      <MypageBoardTbody handleDetail={handleDetail} status={status} />
    </Table2>
  );
};

export default MypageBoardTable;
