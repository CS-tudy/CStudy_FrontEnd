import * as S from './style';

const MypageBoard = () => {
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
            <tr>
              <S.Tbody></S.Tbody>
              <S.Tbody></S.Tbody>
              <S.Tbody></S.Tbody>
            </tr>
          </tbody>
        </S.BoardTable>
      </S.MypageBoardInner>
    </S.MypageBoardWrapper>
  );
};

export default MypageBoard;
