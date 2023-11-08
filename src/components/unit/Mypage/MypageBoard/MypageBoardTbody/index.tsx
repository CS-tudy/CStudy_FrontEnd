import React from 'react';
import MypaegBoardItem from '../MypageBoardItem';
import { StatusContent, statusMap } from 'types/mypage';

interface boardProps {
  handleDetail: (id: number) => void;
  statusList: statusMap;
}

const MypageBoardTbody = ({ statusList, handleDetail }: boardProps) => {
  return (
    <>
      {statusList?.content?.map((content: StatusContent) => (
        <MypaegBoardItem
          key={content.id}
          content={content}
          handleDetail={handleDetail}
        />
      ))}
    </>
  );
};

export default MypageBoardTbody;
