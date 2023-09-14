import * as S from './style';
import { AiOutlineClose } from 'react-icons/ai';
import GoogleLogoImage from 'assets/Google_Logo.png';
import KaKaoLogoImage from 'assets/KaKao_Logo.png';

interface Props {
  children: JSX.Element;
  toggleModal: VoidFunction;
}

const SignModal = ({ children, toggleModal }: Props) => {
  return (
    <S.Container>
      <S.XButton onClick={toggleModal}>
        <AiOutlineClose size={20} />
      </S.XButton>
      <S.Title>CSTUDY에 오신 것을 환영합니다!</S.Title>
      {children}
      {/* <S.Line>
        <S.Hr></S.Hr>
        <S.TextSocialLogin>소셜 로그인</S.TextSocialLogin>
        <S.Hr></S.Hr>
      </S.Line>
      <S.SocialLogin>
        <a
          href="http://localhost:8080/oauth2/authorization/google"
          rel="noopener noreferrer"
        >
          <S.SocialLogo src={GoogleLogoImage} alt="구글로 로그인" />
        </a>

        <a
          href="http://localhost:8080/oauth2/authorization/kakao"
          rel="noopener noreferrer"
        >
          <S.SocialLogo src={KaKaoLogoImage} alt="카카오 로그인" />
        </a>
      </S.SocialLogin>
    </S.Container>
  );
};

export default SignModal;
