import Container from 'components/commons/Container';
import * as S from './style';
import MypageBoard from 'components/unit/Mypage/MypageBoard/MypageBoardIConbine';
import MypageMyInfo from 'components/unit/Mypage/MypageMyInfo';
import MypageQuestion from 'components/unit/Mypage/MypageQuestion';
import { useGetImg } from 'hooks/@query/mypage/useGetImg';
import { useGetMypage } from 'hooks/@query/mypage/useGetMypage';
import useMyPage from 'hooks/mypage/useMyPage';
import { FieldValues, useForm } from 'react-hook-form';
import { myPageDownloadState, myPageState, statusMap } from 'types/mypage';
import ContentContainer from 'components/commons/ContentContainer';
import { useGetMyRequestList } from 'hooks/@query/request/useGetRequestList';
import useMypageFilter from 'hooks/mypage/useMypageFilter';

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
    setIsActive,
  } = useMyPage({ reset, getValues });

  const { myPageStatusFilter, handlePage } = useMypageFilter();

  const Img = useGetImg();
  const myPageInfo = useGetMypage();
  const statusList = useGetMyRequestList({
    page: myPageStatusFilter.pageNumber,
    sort: '',
  });
  return (
    <ContentContainer>
      <Container>
        <S.MyPageInfoWrapper>
          <MypageMyInfo
            img={Img as unknown as myPageDownloadState}
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
            setIsActive={setIsActive}
          />
          <MypageBoard
            handleDetail={handleDetail}
            handlePage={handlePage}
            statusList={statusList as unknown as statusMap}
            page={myPageStatusFilter.pageNumber}
          />
          <MypageQuestion />
        </S.MyPageInfoWrapper>
      </Container>
    </ContentContainer>
  );
};

export default MyPage;
