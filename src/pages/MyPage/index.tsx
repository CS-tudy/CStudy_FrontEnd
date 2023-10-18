import Container from 'components/commons/Container';
import * as S from './style';
import MypageBoard from 'components/unit/Mypage/MypageBoard';
import MypageMyInfo from 'components/unit/Mypage/MypageMyInfo';
import MypageQuestion from 'components/unit/Mypage/MypageQuestion';
import { useGetImg } from 'hooks/@query/mypage/useGetImg';
import { useGetMypage } from 'hooks/@query/mypage/useGetMypage';
import { useGetStatus } from 'hooks/@query/mypage/useGetStatus';
import useMyPage from 'hooks/mypage/useMyPage';
import { FieldValues, useForm } from 'react-hook-form';
import { myPageDownloadState, myPageState } from 'types/mypage';
const MyPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      newPassword: '',
      oldPassword: '',
    },
  });
  const {
    isActive,
    isLoading,
    HandleClickPwd,
    passwordPattern,
    handleChangePwdSubmit,
    onValid,
    handleDetail,
  } = useMyPage({ reset, getValues });

  const Img = useGetImg();
  const myPageInfo = useGetMypage();
  const status = useGetStatus();

  return (
    <Container>
      <S.MyPageInfoWrapper>
        <MypageMyInfo
          img={Img as myPageDownloadState}
          myPageInfo={myPageInfo as myPageState}
          isActive={isActive}
          isLoading={isLoading}
          HandleClickPwd={HandleClickPwd}
          passwordPattern={passwordPattern}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          handleChangePwdSubmit={handleChangePwdSubmit}
          onValid={onValid}
        />
        <MypageBoard handleDetail={handleDetail} status={status} />
        <MypageQuestion />
      </S.MyPageInfoWrapper>
    </Container>
  );
};

export default MyPage;
