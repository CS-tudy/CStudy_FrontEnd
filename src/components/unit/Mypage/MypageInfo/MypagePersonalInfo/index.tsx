import React, { memo } from 'react';
import { myPageState } from 'types/mypage';
import * as S from './style';
import { useGetMyRank } from 'hooks/@query/rank/useGetMyRank';

interface MypagePersonnalInfoProps {
  myPageInfo: myPageState;
}
function MypagePersonnalInfo({ myPageInfo }: MypagePersonnalInfoProps) {
  const myRank = useGetMyRank();
  console.log('myrank', myRank);

  return (
    <>
      {myPageInfo && (
        <>
          <S.InfoHeader>
            <S.MyId>{myPageInfo.data?.name}</S.MyId>
            <S.MyRank>{myRank}위</S.MyRank>
          </S.InfoHeader>
          <S.MyEmail>{myPageInfo.data?.email}</S.MyEmail>
        </>
      )}
    </>
  );
}

export default memo(MypagePersonnalInfo);
