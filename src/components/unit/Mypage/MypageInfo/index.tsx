import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';
import Button from 'components/commons/Button/Button';
import { RootState } from 'stroe';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { useRef } from 'react';

interface MyPageMyInfoProps {
  HandleClickPwd: () => void;
  onValid: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

const MyPageInfo = ({
  onValid,
  HandleClickPwd,
  register,
  handleSubmit,
}: MyPageMyInfoProps) => {
  const infoSelector = useSelector((state: RootState) => state.Mypage.info);
  const imgSelector = useSelector(
    (state: RootState) => state.MyPageDownload.image,
  );
  return (
    <>
      <S.MyInfoImg>
        <S.MyImgDiv>
          <picture>
            {imgSelector && <S.MyImg src={imgSelector} alt="프로필" />}
          </picture>
          <S.Form onSubmit={handleSubmit(onValid)}>
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
          </S.Form>
        </S.MyImgDiv>
        <S.MyInfo>
          {infoSelector !== undefined && (
            <>
              <S.MyId>{infoSelector.name}</S.MyId>
              <S.MyEmail>{infoSelector.email}</S.MyEmail>
            </>
          )}
          <Button onClick={HandleClickPwd} variant={'gray'} size={'large'}>
            비밀번호 변경
          </Button>
        </S.MyInfo>
      </S.MyInfoImg>
    </>
  );
};

export default MyPageInfo;
