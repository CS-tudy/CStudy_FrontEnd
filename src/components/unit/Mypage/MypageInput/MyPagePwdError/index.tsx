import React, { memo } from 'react';
import * as S from './style';
import { FieldErrors } from 'react-hook-form';

interface MhpagePwdError {
  errors: FieldErrors;
  passwordPattern: {
    value: RegExp;
    message: string;
  };
}

function MypagePwdError({ errors, passwordPattern }: MhpagePwdError) {
  return <S.Error>{errors.oldPassword && passwordPattern.message}</S.Error>;
}

export default memo(MypagePwdError);
