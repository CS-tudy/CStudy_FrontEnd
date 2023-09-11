import * as S from './style';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  children: JSX.Element;
  toggleModal: VoidFunction;
}

const AuthModalFrame = ({ children, toggleModal }: Props) => {
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
      {/* <S.SocialLogin>
        <a
          href="http://localhost:8080/oauth2/authorization/google"
          rel="noopener noreferrer"
        >
          <S.GoogleLogo src={GoogleLogoImage} alt="구글로 로그인" />
        </a>
      </S.SocialLogin> */}
    </S.Container>
  );
};

export default AuthModalFrame;
