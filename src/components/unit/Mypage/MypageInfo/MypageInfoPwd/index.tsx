import React from 'react';
import Button from 'components/commons/Button/Button';

interface MypageInfoPwdProps {
  HandleClickPwd: () => void;
}

function MypageInfoPwd({ HandleClickPwd }: MypageInfoPwdProps) {
  return (
    <Button onClick={HandleClickPwd} variant={'gray'} size={'large'}>
      비밀번호 변경
    </Button>
  );
}

export default MypageInfoPwd;
