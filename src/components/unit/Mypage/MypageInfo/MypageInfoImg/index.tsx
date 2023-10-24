import React from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import * as S from './style';
import Button from 'components/commons/Button/Button';

interface MyPageInfoImgProps {
  onValid: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  img: any;
}

const MypageInfoImg = ({
  onValid,
  register,
  handleSubmit,
  img,
}: MyPageInfoImgProps) => {
  return (
    <S.MyImgDiv>
      <picture>
        {img !== undefined && <S.MyImg src={img} alt="프로필" />}
      </picture>
      <form onSubmit={handleSubmit(onValid)}>
        <S.Label htmlFor="image_file">이미지 수정</S.Label>
        <S.FileInput
          id="image_file"
          {...register('files')}
          type="file"
          accept="image/*"
        />
        <S.ButtonDiv>
          <Button type="submit" variant={'primary'} size={'not'}>
            업로드
          </Button>
        </S.ButtonDiv>
      </form>
    </S.MyImgDiv>
  );
};

export default MypageInfoImg;
