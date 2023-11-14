import Pagination from 'components/commons/Pagination';
import MypageBoardTable from '../MypageBoardTable';
import * as S from './style';
import { statusMap } from 'types/mypage';
import ContainerBottom from 'components/commons/ContainerBottom';

interface boardProps {
  handleDetailStatus: (id: number) => void;
  statusList: statusMap;
  handlePage: (page: number) => void;
  page: number;
}
const MypageBoardInfo = ({
  handlePage,
  handleDetailStatus,
  statusList,
  page,
}: boardProps) => {
  return (
    <S.MypageBoardWrapper>
      <S.BoardTitle>나의 게시판 승인 현황</S.BoardTitle>
      <S.MypageBoardInner>
        <MypageBoardTable
          handleDetailStatus={handleDetailStatus}
          statusList={statusList}
        />
      </S.MypageBoardInner>
      <ContainerBottom>
        {(statusList?.totalPages as number) > 0 && (
          <Pagination
            white
            totalPages={statusList?.totalPages as number}
            handlePage={handlePage}
            page={page}
          />
        )}
      </ContainerBottom>
    </S.MypageBoardWrapper>
  );
};

export default MypageBoardInfo;
