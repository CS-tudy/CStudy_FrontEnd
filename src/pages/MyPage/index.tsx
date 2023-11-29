import Container from 'components/commons/Container';
import * as S from './style';
import MypageBoard from 'components/unit/Mypage/MypageBoard/MypageBoardIConbine';
import MypageMyInfo from 'components/unit/Mypage/MypageMyInfo';
import MypageQuestion from 'components/unit/Mypage/MypageQuestion/MypageQuestionTable';
import { useGetImg } from 'hooks/@query/mypage/useGetImg';
import { useGetMypage } from 'hooks/@query/mypage/useGetMypage';
import useMyPage from 'hooks/mypage/useMyPage';
import { FieldValues, useForm } from 'react-hook-form';
import { myPageState, statusMap } from 'types/mypage';
import ContentContainer from 'components/commons/ContentContainer';
import { useGetMyRequestList } from 'hooks/@query/request/useGetRequestList';
import useMypageFilter from 'hooks/mypage/useMypageFilter';
import { useGetReview } from 'hooks/@query/review/useGetReview';
import { useGetMyRank } from 'hooks/@query/rank/useGetMyRank';

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
    handleDetailStatus,
    handleDetailAnswer,
    setIsActive,
    setSelectedFile,
  } = useMyPage({ reset, getValues });

  const { myPageStatusFilter, handlePage } = useMypageFilter();

  const Img = useGetImg();
  const myPageInfo = useGetMypage();
  const reviewList = useGetReview();
  const statusList = useGetMyRequestList({
    page: myPageStatusFilter.pageNumber,
    sort: '',
  });

  const blob = new Blob([Img], { type: 'mime-type' });
  const getImg = URL.createObjectURL(blob);
  return (
    <ContentContainer>
      <Container padding={true}>
        <S.MyPageInfoWrapper>
          <MypageMyInfo
            img={Img as string}
            getImg={getImg}
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
            setSelectedFile={setSelectedFile}
          />
          <MypageBoard
            handleDetailStatus={handleDetailStatus}
            handlePage={handlePage}
            statusList={statusList as unknown as statusMap}
            page={myPageStatusFilter.pageNumber}
          />
          <MypageQuestion
            reviewList={reviewList}
            handleDetailAnswer={handleDetailAnswer}
          />
        </S.MyPageInfoWrapper>
      </Container>
    </ContentContainer>
  );
};

export default MyPage;
