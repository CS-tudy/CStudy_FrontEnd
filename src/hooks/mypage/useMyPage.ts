import React, { useState } from 'react';
import { FieldValues, UseFormGetValues, UseFormReset } from 'react-hook-form';
import { usePwdEdit } from './../@query/mypage/usePwdEdit';
import { useUploadImg } from './../@query/mypage/useUploadImg';
import { useGetImg } from './../@query/mypage/useGetImg';
import { useNavigate } from 'react-router-dom';

interface useMyPageProp {
  reset: UseFormReset<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
}

const useMyPage = ({ reset, getValues }: useMyPageProp) => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const passwordPattern = {
    value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/,
    message: '문자, 숫자, 기호를 포함한 8~20자를 입력해주세요.',
  };

  const HandleClickPwd = () => {
    setIsActive(isActive => !isActive);
  };

  const handleChangePwdSubmit = () => {
    const { mutate: PwdEdit } = usePwdEdit();
    const oldPassword = getValues('oldPassword');
    const newPassword = getValues('newPassword');
    const edit = {
      oldPassword,
      newPassword,
    };
    PwdEdit(edit);
    reset();
  };

  const { mutate: uploadImg } = useUploadImg();
  const img = useGetImg();

  const onValid = () => {
    const data = getValues('files');
    console.log(data);
    const formData = new FormData();
    formData.append('files', data[0]);

    uploadImg(formData);
    img;
  };

  const handleDetail = (id: number) => {
    navigate(`/request/${id}`);
  };

  return {
    handleDetail,
    HandleClickPwd,
    isActive,
    isLoading,
    passwordPattern,
    handleChangePwdSubmit,
    onValid,
  };
};

export default useMyPage;
