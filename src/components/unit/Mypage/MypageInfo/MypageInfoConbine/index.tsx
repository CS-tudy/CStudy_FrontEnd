import * as S from './style';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { myPageDownloadState, myPageState } from 'types/mypage';
import MypageInfoImg from '../MypageInfoImg';
import MypageInfoPwd from '../MypageInfoPwd';
import MypagePersonnalInfo from '../MypagePersonalInfo';

interface MyPageMyInfoProps {
  HandleClickPwd: () => void;
  onValid: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  myPageInfo: myPageState;
  img: string;
  getImg: string;
}

const MyPageInfo = ({
  onValid,
  HandleClickPwd,
  register,
  handleSubmit,
  myPageInfo,
  img,
  getImg,
}: MyPageMyInfoProps) => {
  return (
    <>
      <S.MyInfoImg>
        <MypageInfoImg
          getImg={getImg}
          onValid={onValid}
          register={register}
          handleSubmit={handleSubmit}
          img={img}
        />
        <S.MyInfo>
          <MypagePersonnalInfo myPageInfo={myPageInfo} />
          <MypageInfoPwd HandleClickPwd={HandleClickPwd} />
        </S.MyInfo>
      </S.MyInfoImg>
    </>
  );
};

export default MyPageInfo;
