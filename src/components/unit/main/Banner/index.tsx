import * as S from './style';
import banner_gif from '../../../../assets/CSutdybanner.gif';
const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.Texts>
        <S.Text>비전공자도 쉽게 배우는</S.Text> <br />
        <S.Bold>CStudy 올인원 문제집</S.Bold>
        <br />
        <S.SpanText>
          실제IT 기업 면접 질문을 만들어 취업 면접 대비 문제 없어요!
        </S.SpanText>
      </S.Texts>

      <S.BannerImg src={banner_gif} alt="배너 이미지" />
    </S.BannerWrapper>
  );
};

export default Banner;
