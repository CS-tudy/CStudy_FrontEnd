import { useCallback, useState } from 'react';
import { FieldValues, UseFormGetValues, UseFormReset } from 'react-hook-form';
import { usePwdEdit } from './../@query/mypage/usePwdEdit';
import { useUploadImg } from './../@query/mypage/useUploadImg';
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

  const HandleClickPwd = useCallback(() => {
    setIsActive(isActive => !isActive);
  }, [isActive]);

  const { mutate: PwdEdit } = usePwdEdit();

  const handleChangePwdSubmit = useCallback(() => {
    const oldPassword = getValues('oldPassword');
    const newPassword = getValues('newPassword');
    const edit = {
      oldPassword,
      newPassword,
    };
    PwdEdit(edit);
    reset();
    setIsActive(isActive => !isActive);
  }, []);

  const { mutate: uploadImg } = useUploadImg();

  const onValid = useCallback(() => {
    const data = getValues('files');
    const formData = new FormData();
    formData.append('files', data[0]);

    uploadImg(formData);
  }, []);

  const handleDetailStatus = useCallback((id: number) => {
    navigate(`/request/${id}`);
  }, []);

  const handleDetailAnswer = useCallback((id: number) => {
    navigate(`/problem/${id}`);
  }, []);

  return {
    handleDetailStatus,
    handleDetailAnswer,
    HandleClickPwd,
    isActive,
    isLoading,
    passwordPattern,
    handleChangePwdSubmit,
    onValid,
    setIsActive,
  };
};

export default useMyPage;
