import Input from 'components/commons/Input';
import React from 'react';
import * as S from './style';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface MypagePwdProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  passwordPattern: {
    value: RegExp;
    message: string;
  };
}

const MyPagePwd = ({ errors, passwordPattern, register }: MypagePwdProps) => {
  return (
    <S.OldNewdPwd>
      <S.PwdLabel htmlFor="newPassword">바꿀 비밀번호</S.PwdLabel>
      <Input
        id="newPassword"
        type="password"
        pattern={passwordPattern}
        register={register}
        errors={errors}
      />
      <S.PwdLabel htmlFor="oldPassword">현재 비밀번호</S.PwdLabel>
      <Input
        id="oldPassword"
        type="password"
        pattern={passwordPattern}
        register={register}
        errors={errors}
      />
    </S.OldNewdPwd>
  );
};

export default MyPagePwd;
