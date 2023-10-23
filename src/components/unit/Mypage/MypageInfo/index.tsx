import * as S from './style';
import Button from 'components/commons/Button/Button';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { myPageDownloadState, myPageState } from 'types/mypage';

interface MyPageMyInfoProps {
  HandleClickPwd: () => void;
  onValid: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  myPageInfo: myPageState;
  img: any;
}

const MyPageInfo = ({
  onValid,
  HandleClickPwd,
  register,
  handleSubmit,
  myPageInfo,
  img,
}: MyPageMyInfoProps) => {
  return (
    <>
      <S.MyInfoImg>
        <S.MyImgDiv>
          <picture>
            {img !== undefined && <S.MyImg src={img} alt="프로필" />}
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
          {myPageInfo && (
            <>
              <S.MyId>{myPageInfo.data?.name}</S.MyId>
              <S.MyEmail>{myPageInfo.data?.email}</S.MyEmail>
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
