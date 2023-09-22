import * as S from './style';
import MypageBoard from 'components/unit/Mypage/MypageBoard';
import MypageMyInfo from 'components/unit/Mypage/MypageMyInfo';
import { useGetMypage } from 'hooks/mypage/useGetMypage';
import useMyPage from 'hooks/mypage/useMyPage';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'stroe';
const MyPage = () => {
  const {
    register,
    handleSubmit,
    reset,
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
  } = useMyPage({ reset });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(useGetMypage());
  }, []);

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
