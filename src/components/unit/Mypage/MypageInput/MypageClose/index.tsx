import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import * as S from './style';

interface MypageCloseProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MypageClose = ({ setIsActive }: MypageCloseProps) => {
  return (
    <S.Close onClick={() => setIsActive((isActive: boolean) => !isActive)}>
      <AiOutlineClose />
    </S.Close>
  );
};

export default MypageClose;
