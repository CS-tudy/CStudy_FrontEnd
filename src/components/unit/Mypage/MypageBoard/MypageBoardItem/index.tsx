import ApproveStatus from 'components/commons/Status';
import { TBodyTd } from 'components/commons/Table/style';
import React, { memo } from 'react';
import { StatusContent } from 'types/mypage';

interface boardProps {
  handleDetailStatus: (id: number) => void;
  content: StatusContent;
}

const MypaegBoardItem = ({ handleDetailStatus, content }: boardProps) => {
  const { id, title, flag } = content;
  return (
    <tr style={{ cursor: 'pointer' }} onClick={() => handleDetailStatus(id)}>
      <TBodyTd $white={true} $narrow2>
        {id}
      </TBodyTd>
      <TBodyTd $white={true} $narrow2>
        {title}
      </TBodyTd>
      <TBodyTd $white={true} $narrow2>
        <ApproveStatus flag={flag} />
      </TBodyTd>
    </tr>
  );
};

export default memo(MypaegBoardItem);
