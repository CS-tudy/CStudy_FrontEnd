import * as S from './style';
import { AiOutlineClose } from 'react-icons/ai';
import GoogleLogoImage from 'assets/Google_Logo.png';
import KaKaoLogoImage from 'assets/KaKao_Logo.png';
import { instance } from 'api';

interface Props {
  children: JSX.Element;
  toggleModal: VoidFunction;
}

const SignModal = ({ children, toggleModal }: Props) => {
  const test = async () => {
    try {
      instance
        .get('/oauth2/authorization/google')
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

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
      </S.Line> */}
      <S.SocialLogin>
        <a
          href={`${process.env.REACT_APP_API_URL}/oauth2/authorization/google`}
          rel="noopener noreferrer"
        >
          <S.SocialLogo src={GoogleLogoImage} alt="구글로 로그인" />
        </a>
        <button onClick={test}>테스트 </button>

        <a
          href={`${process.env.REACT_APP_API_URL}/oauth2/authorization/kakao`}
          rel="noopener noreferrer"
        >
          <S.SocialLogo src={KaKaoLogoImage} alt="카카오 로그인" />
        </a>
      </S.SocialLogin>
    </S.Container>
  );
};

export default SignModal;
