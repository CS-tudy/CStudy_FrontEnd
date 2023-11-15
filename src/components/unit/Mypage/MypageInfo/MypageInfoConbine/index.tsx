import * as S from './style';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { myPageState } from 'types/mypage';
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
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const MyPageInfo = ({
  onValid,
  HandleClickPwd,
  register,
  handleSubmit,
  myPageInfo,
  img,
  getImg,
  setSelectedFile,
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
          setSelectedFile={setSelectedFile}
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
