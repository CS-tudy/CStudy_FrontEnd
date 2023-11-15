import React from 'react';
import MypaegBoardItem from '../MypageBoardItem';
import { StatusContent, statusMap } from 'types/mypage';

interface boardProps {
  handleDetailStatus: (id: number) => void;
  statusList: statusMap;
}

const MypageBoardTbody = ({ statusList, handleDetailStatus }: boardProps) => {
  return (
    <>
      {statusList?.content?.map((content: StatusContent) => (
        <MypaegBoardItem
          key={content.id}
          content={content}
          handleDetailStatus={handleDetailStatus}
        />
      ))}
    </>
  );
};

export default MypageBoardTbody;
