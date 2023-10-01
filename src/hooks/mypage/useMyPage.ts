import React, { useState } from 'react';
import { FieldValues, UseFormGetValues, UseFormReset } from 'react-hook-form';
import { usePwdEdit } from './usePwdEdit';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'stroe';
import { useUploadImg } from './useUploadImg';
import { useGetImg } from './useGetImg';

interface useMyPageProp {
  reset: UseFormReset<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
}

const useMyPage = ({ reset, getValues }: useMyPageProp) => {
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
    reset();
  };

  const onValid = async () => {
    const data = getValues();
    const formData = new FormData();
    formData.append('files', data.files[0]);
    await dispatch(useUploadImg(formData));
    dispatch(useGetImg());
  };

  return {
    HandleClickPwd,
    isActive,
    isLoading,
    passwordPattern,
    handleChangePwdSubmit,
    onValid,
  };
};

export default useMyPage;
