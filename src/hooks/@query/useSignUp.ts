import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import {
  CheckDuplicatedEmail,
  CheckDuplicatedName,
  sendAuthNumberToEmail,
} from 'api/auth';
import { signUp as signUpApi } from 'api/auth';
import { SignUpForm } from 'types/Form';

export const useSignUp = () => {
  const [noDuplicatedEmail, SetNoDuplicatedEmail] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const authNumber = useRef(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<SignUpForm>();

  const watchedName = watch('name');
  const watchedEmail = watch('email');
  const watchedPassword = watch('password');

  const onCheckDuplicatedName = async () => {
    try {
      const data = await CheckDuplicatedName(watchedName);
      console.log(watchedName);
      console.log(data);

      if (data.verify === 'true') {
        alert('사용할 수 있는 닉네임입니다.');
      } else if (data.verify === 'false') {
        alert('이미 존재하는 닉네임입니다.');
      } else {
        throw new Error('잘못된 응답 데이터입니다.');
      }
    } catch (error) {
      console.error(error);
      throw new Error('오류가 발생했습니다.');
    }
  };

  const onCheckDuplicatedEmail = async () => {
    const data = await CheckDuplicatedEmail(watchedEmail);
    console.log(watchedEmail);
    console.log(data);

    try {
      if (data.verify === 'true') {
        alert('사용할 수 있는 이메일입니다.');
        SetNoDuplicatedEmail(true);
      } else if (data.verify === 'false') {
        alert('이미 존재하는 이메일입니다.');
      } else {
        throw new Error('잘못된 응답 데이터입니다.');
      }
    } catch (error) {
      console.error(error);
      throw new Error('오류가 발생했습니다.');
    }
  };

  const onSendAuthNumberToEmail = async () => {
    setAuthenticating(true);
    const data = await sendAuthNumberToEmail(watchedEmail);
    console.log(data); // Yf7fH9HI
    authNumber.current = data;
  };

  const onCheckAuthNumber = async () => {
    const watchedEmailAuthNumber = watch('emailAuthNumber');
    console.log('test', authNumber.current);

    if (String(authNumber.current) === watchedEmailAuthNumber)
      alert('인증번호가 일치합니다.');
    else alert('인증번호가 일치하지 않습니다.');
  };

  const signUpMutation = useMutation(signUpApi, {
    onSuccess: () => {
      // toast.success('회원가입 되었습니다.');
      // closeSignUpModal();
      alert('회원가입 성공');
    },
    onError: () => {
      // toast.error('가입에 실패했습니다.');
      alert('회원가입 실패');
    },
  });

  const submitForm = (formValues: SignUpForm) => {
    const { emailAuthNumber, passwordConfirm, ...rest } = formValues;
    console.log({ ...rest });
    signUpMutation.mutate({ ...rest });
  };

  return {
    noDuplicatedEmail,
    authenticating,
    register,
    handleSubmit,
    setValue,
    errors,
    watchedPassword,
    submitForm,
    onCheckDuplicatedName,
    onCheckDuplicatedEmail,
    onSendAuthNumberToEmail,
    onCheckAuthNumber,
  };
};
