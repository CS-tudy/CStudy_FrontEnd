import React, { useEffect, useState } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import * as S from './style';
import Button from 'components/commons/Button/Button';
import defaultimg from 'assets/comment_user/default.png';

interface MyPageInfoImgProps {
  onValid: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  img: string;
  getImg: string;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const MypageInfoImg = ({
  onValid,
  register,
  handleSubmit,
  getImg,
  img,
  setSelectedFile,
}: MyPageInfoImgProps) => {
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultimg;
  };

  useEffect(() => {
    if (img) {
      setPreviewImg(img);
    } else {
      setPreviewImg(null);
    }
  }, [img]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewImg(url);
      setSelectedFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  return (
    <S.MyImgDiv>
      <picture>
        {img && (
          <S.MyImg
            src={previewImg || defaultimg}
            alt="프로필"
            onError={handleImageError}
          />
        )}
      </picture>
      <form>
        <S.Label htmlFor="image_file">이미지 수정</S.Label>
        <S.FileInput
          id="image_file"
          {...register('file')}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <S.ButtonDiv>
          <Button
            onClick={handleSubmit(onValid)}
            type="submit"
            variant={'primary'}
            size={'not'}
          >
            업로드
          </Button>
        </S.ButtonDiv>
      </form>
    </S.MyImgDiv>
  );
};

export default MypageInfoImg;
