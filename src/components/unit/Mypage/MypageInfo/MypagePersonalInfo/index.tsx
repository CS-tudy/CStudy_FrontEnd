import React from 'react';
import { myPageState } from 'types/mypage';
import * as S from './style';

interface MypagePersonnalInfoProps {
  myPageInfo: myPageState;
}
function MypagePersonnalInfo({ myPageInfo }: MypagePersonnalInfoProps) {
  return (
    <>
      {myPageInfo && (
        <>
          <S.MyId>{myPageInfo.data?.name}</S.MyId>
          <S.MyEmail>{myPageInfo.data?.email}</S.MyEmail>
        </>
      )}
    </>
  );
}

export default MypagePersonnalInfo;
