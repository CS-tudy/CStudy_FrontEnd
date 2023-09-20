import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { usePwdEdit } from './usePwdEdit';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'hooks/@redux/MypagePwdSlice';

const useMyPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const passwordPattern = {
    value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/,
    message: '문자, 숫자, 기호를 포함한 8~20자를 입력해주세요.',
  };
  const HandleClickPwd = () => {
    setIsActive(isActive => !isActive);
  };
  const handleChangePwdSubmit = (formData: FieldValues) => {
    dispatch(usePwdEdit(formData));
    console.log(formData);
  };

  return {
    HandleClickPwd,
    isActive,
    isLoading,
    passwordPattern,
    handleChangePwdSubmit,
  };
};

export default useMyPage;
