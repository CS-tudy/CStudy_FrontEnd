import MypageBoardTable from '../MypageBoardTable';
import * as S from './style';
import { statusMap } from 'types/mypage';

interface boardProps {
  handleDetail: (id: number) => void;
  status: statusMap;
}
const MypageBoardInfo = ({ handleDetail, status }: boardProps) => {
  return (
    <S.MypageBoardWrapper>
      <S.BoardTitle>나의 게시판 승인 현황</S.BoardTitle>
      <S.MypageBoardInner>
        <MypageBoardTable handleDetail={handleDetail} status={status} />
      </S.MypageBoardInner>
    </S.MypageBoardWrapper>
  );
};

export default MypageBoardInfo;
