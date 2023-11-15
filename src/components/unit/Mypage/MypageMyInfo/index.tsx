import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import MyPageInfo from '../MypageInfo/MypageInfoConbine';
import * as S from './style';
import MypageInput from '../MypageInput/MypageInputConbine';
import { myPageState } from 'types/mypage';

interface MypageMyInfoProps {
  isLoading: boolean;
  isActive: boolean;
  passwordPattern: {
    value: RegExp;
    message: string;
  };
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  HandleClickPwd: () => void;
  handleChangePwdSubmit: (formData: FieldValues) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onValid: () => void;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
  myPageInfo: myPageState;
  img: string;
  getImg: string;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MypageMyInfo = ({
  register,
  handleSubmit,
  errors,
  isLoading,
  isActive,
  HandleClickPwd,
  passwordPattern,
  handleChangePwdSubmit,
  onValid,
  myPageInfo,
  setIsActive,
  getImg,
  img,
  setSelectedFile,
}: MypageMyInfoProps) => {
  return (
    <S.MyInfoWrapper>
      <MyPageInfo
        myPageInfo={myPageInfo}
        img={img}
        getImg={getImg}
        register={register}
        onValid={onValid}
        handleSubmit={handleSubmit}
        HandleClickPwd={HandleClickPwd}
        setSelectedFile={setSelectedFile}
      />
      {isActive && (
        <MypageInput
          setIsActive={setIsActive}
          isActive={isActive}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          passwordPattern={passwordPattern}
          handleChangePwdSubmit={handleChangePwdSubmit}
        />
      )}
    </S.MyInfoWrapper>
  );
};

export default MypageMyInfo;
