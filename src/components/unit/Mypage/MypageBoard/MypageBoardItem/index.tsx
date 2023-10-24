import ApproveStatus from 'components/commons/Status';
import { TBodyTd } from 'components/commons/Table/style';
import React from 'react';
import { statusMap } from 'types/mypage';

interface boardProps {
  handleDetail: (id: number) => void;
  content: statusMap;
}

const MypaegBoardItem = ({ handleDetail, content }: boardProps) => {
  const { id, title, flag } = content;
  return (
    <tr onClick={() => handleDetail(id)}>
      <TBodyTd white={true} narrow2>
        {id}
      </TBodyTd>
      <TBodyTd white={true} narrow2>
        {title}
      </TBodyTd>
      <TBodyTd white={true} narrow2>
        <ApproveStatus flag={flag} />
      </TBodyTd>
    </tr>
  );
};

export default MypaegBoardItem;
