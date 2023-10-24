import React from 'react';
import * as S from './style';

interface MypageCloseProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MypageClose = ({ setIsActive }: MypageCloseProps) => {
  return (
    <S.Close onClick={() => setIsActive((isActive: boolean) => !isActive)}>
      X
    </S.Close>
  );
};

export default MypageClose;
