import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import MyPageInfo from '../MypageInfo';
import * as S from './style';
import MypageInput from '../MypageInput';

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
}: MypageMyInfoProps) => {
  return (
    <S.MyInfoWrapper>
      <MyPageInfo
        register={register}
        onValid={onValid}
        handleSubmit={handleSubmit}
        HandleClickPwd={HandleClickPwd}
      />
      {isActive && (
        <MypageInput
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
