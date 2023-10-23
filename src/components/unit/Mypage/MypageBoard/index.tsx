import { useSelector } from 'react-redux';
import * as S from './style';
import { RootState } from 'stroe';
import ApproveStatus from 'components/commons/Status';

interface statusMap {
  content: [];
  id: number;
  title: string;
  flag: boolean;
  status: {
    content?: [];
  };
}
interface boardProps {
  handleDetail: (id: number) => void;
  status: statusMap;
}

const MypageBoard = ({ handleDetail, status }: boardProps) => {
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
            {status?.content.map((content: statusMap) => (
              <S.Tr onClick={() => handleDetail(content?.id)} key={content?.id}>
                <S.Tbody>{content?.id}</S.Tbody>
                <S.Tbody>{content?.title}</S.Tbody>
                <S.Tbody>
                  <ApproveStatus flag={content?.flag} />
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
