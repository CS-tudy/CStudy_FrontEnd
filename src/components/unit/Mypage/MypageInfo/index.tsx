import * as S from './style';
import Button from 'components/commons/Button/Button';

interface MyPageMyInfoProps {
  HandleClickPwd: () => void;
}

const MyPageInfo = ({ HandleClickPwd }: MyPageMyInfoProps) => {
  return (
    <>
      <S.MyInfoImg>
        <picture>
          <S.MyImg />
        </picture>
        <S.MyInfo>
          <S.MyId>사용자ID</S.MyId>
          <S.MyEmail>사용자Email</S.MyEmail>
          <Button onClick={HandleClickPwd} variant={'gray'} size={'large'}>
            비밀번호 변경
          </Button>
        </S.MyInfo>
      </S.MyInfoImg>
    </>
  );
};

export default MyPageInfo;
