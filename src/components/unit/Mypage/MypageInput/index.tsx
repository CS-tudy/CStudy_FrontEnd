import { MyInfoImg } from '../MypageInfo/style';
import Input from 'components/commons/Input';
import Button from 'components/commons/Button/Button';
import * as S from './style';
import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

interface MypageInputProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors;
  passwordPattern: {
    value: RegExp;
    message: string;
  };
  handleChangePwdSubmit: (formData: FieldValues) => void;
}

const MypageInput = ({
  register,
  handleSubmit,
  errors,
  passwordPattern,
  handleChangePwdSubmit,
}: MypageInputProps) => {
  return (
    <>
      <MyInfoImg>
        <S.PwdButton>
          <form onSubmit={handleSubmit(handleChangePwdSubmit)}>
            <S.Pwd>
              <S.OldNewdPwd>
                <S.PwdLabel htmlFor="oldPassword">현재 비밀번호</S.PwdLabel>
                <Input
                  id="oldPassword"
                  type="text"
                  pattern={passwordPattern}
                  register={register}
                  errors={errors}
                />
                <S.Error>
                  {errors.oldPassword && passwordPattern.message}
                </S.Error>
              </S.OldNewdPwd>
              <S.OldNewdPwd>
                <S.PwdLabel htmlFor="newPassword">바꿀 비밀번호</S.PwdLabel>
                <Input
                  id="newPassword"
                  type="text"
                  pattern={passwordPattern}
                  register={register}
                  errors={errors}
                />
                <S.Error>{errors.newPwd && passwordPattern.message}</S.Error>
              </S.OldNewdPwd>
            </S.Pwd>
            <Button type="submit" variant={'primary'} size={'full'}>
              변경하기
            </Button>
          </form>
        </S.PwdButton>
      </MyInfoImg>
    </>
  );
};

export default MypageInput;
