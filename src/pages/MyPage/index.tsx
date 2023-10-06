import * as S from './style';
import MypageBoard from 'components/unit/Mypage/MypageBoard';
import MypageMyInfo from 'components/unit/Mypage/MypageMyInfo';
import useMyPage from 'hooks/mypage/useMyPage';
import { FieldValues, useForm } from 'react-hook-form';
const MyPage = () => {
  const {
    register,
    handleSubmit,
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
  } = useMyPage();

  return (
    <S.MyPageWrapper>
      <S.MyPageTitle>마이페이지</S.MyPageTitle>
      <S.MyPageInfoWrapper>
        <MypageMyInfo
          isActive={isActive}
          isLoading={isLoading}
          HandleClickPwd={HandleClickPwd}
          passwordPattern={passwordPattern}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          handleChangePwdSubmit={handleChangePwdSubmit}
        />
        <MypageBoard />
      </S.MyPageInfoWrapper>
    </S.MyPageWrapper>
  );
};

export default MyPage;
