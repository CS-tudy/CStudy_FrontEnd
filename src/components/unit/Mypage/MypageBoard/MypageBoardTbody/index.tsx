import React from 'react';
import MypaegBoardItem from '../MypageBoardItem';
import { statusMap } from 'types/mypage';

interface boardProps {
  handleDetail: (id: number) => void;
  status: statusMap;
}

const MypageBoardTbody = ({ status, handleDetail }: boardProps) => {
  return (
    <>
      {status?.content.map((content: statusMap) => (
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
