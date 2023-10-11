import { useSelector } from 'react-redux';
import * as S from './style';
import { RootState } from 'stroe';
import ApproveStatus from 'components/commons/Status';
import { useNavigate } from 'react-router-dom';

interface statusMap {
  id: number;
  title: string;
  flag: boolean;
}
interface boardProps {
  handleDetail: (id: number) => void;
}

const MypageBoard = ({ handleDetail }: boardProps) => {
  const statusSelector = useSelector(
    (state: RootState) => state.MypageStatus.status,
  );

  return (
    <S.MypageBoardWrapper>
      <S.BoardTitle>나의 게시판 승인 현황</S.BoardTitle>
      <S.MypageBoardInner>
        <S.BoardTable cellSpacing={0}>
          <colgroup>
            <col width={'10%'} />
            <col width={'70%'} />
            <col width={'30%'} />
          </colgroup>
          <thead>
            <tr>
              <S.Thead>NO.</S.Thead>
              <S.Thead>게시글 제목</S.Thead>
              <S.Thead>승인상태</S.Thead>
            </tr>
          </thead>
          <tbody>
            {statusSelector.content.map((status: statusMap) => (
              <S.Tr onClick={() => handleDetail(status?.id)} key={status?.id}>
                <S.Tbody>{status?.id}</S.Tbody>
                <S.Tbody>{status?.title}</S.Tbody>
                <S.Tbody>
                  <ApproveStatus flag={status?.flag} />
                </S.Tbody>
              </S.Tr>
            ))}
          </tbody>
        </S.BoardTable>
      </S.MypageBoardInner>
    </S.MypageBoardWrapper>
  );
};

export default MypageBoard;
