import * as S from './style';
import MypageBoard from 'components/unit/Mypage/MypageBoard';
import MypageMyInfo from 'components/unit/Mypage/MypageMyInfo';
import { useGetImg } from 'hooks/mypage/useGetImg';
import { useGetMypage } from 'hooks/mypage/useGetMypage';
import { useGetStatus } from 'hooks/mypage/useGetStatus';
import useMyPage from 'hooks/mypage/useMyPage';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'stroe';
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
  } = useMyPage({ reset, getValues });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(useGetMypage());
    dispatch(useGetImg());

    // dispatch(useGetStatus());
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
          onValid={onValid}
        />
        <MypageBoard />
      </S.MyPageInfoWrapper>
    </S.MyPageWrapper>
  );
};

export default MyPage;
