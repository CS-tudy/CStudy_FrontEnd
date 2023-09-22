import { useSelector } from 'react-redux';
import * as S from './style';
import Button from 'components/commons/Button/Button';
import { RootState } from 'stroe';

interface MyPageMyInfoProps {
  HandleClickPwd: () => void;
}

const MyPageInfo = ({ HandleClickPwd }: MyPageMyInfoProps) => {
  const infoSelector = useSelector((state: RootState) => state.Mypage.info);
  console.log(infoSelector);
  return (
    <>
      <S.MyInfoImg>
        <picture>
          <S.MyImg />
        </picture>
        <S.MyInfo>
          {infoSelector !== undefined && (
            <>
              <S.MyId>{infoSelector.name}</S.MyId>
              <S.MyEmail>{infoSelector.email}</S.MyEmail>
            </>
          )}
          <Button onClick={HandleClickPwd} variant={'gray'} size={'large'}>
            비밀번호 변경
          </Button>
        </S.MyInfo>
      </S.MyInfoImg>
    </>
  );
};

export default MyPageInfo;
