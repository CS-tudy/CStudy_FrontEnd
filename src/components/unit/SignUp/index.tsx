import {
  CheckDuplicatedEmail,
  CheckDuplicatedName,
  sendAuthNumberToEmail,
  signUp,
} from 'api/auth';
import Container from 'components/commons/Container';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpForm } from 'types/Form';
import * as S from './style';
import React, { useState, useRef } from 'react';

const SignUp = () => {
  const [noDuplicatedEmail, SetNoDuplicatedEmail] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const authNumber = useRef(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();

  const watchedName = watch('name');
  const watchedEmail = watch('email');
  const watchedPassword = watch('password');

  const submitForm = (formValues: SignUpForm) => {
    const { emailAuthNumber, passwordConfirm, ...rest } = formValues;
    console.log({ ...rest });
    signUp({ ...rest });
  };

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

  // 인증번호 전송
  const onSendAuthNumberToEmail = async () => {
    setAuthenticating(true);
    const data = await sendAuthNumberToEmail(watchedEmail);
    console.log(data); // Yf7fH9HI
    authNumber.current = data;
  };

  // 인증번호 확인
  const onCheckAuthNumber = async () => {
    const watchedEmailAuthNumber = watch('emailAuthNumber');
    console.log('test', authNumber.current);

    if (authNumber.current === watchedEmailAuthNumber)
      alert('인증번호가 일치합니다.');
    else alert('인증번호가 일치하지 않습니다.');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submitForm)}>
        <S.InputDiv>
          <S.Input
            type="text"
            placeholder="이름"
            {...register('name', {
              required: '이름을 입력해주세요.',

              onChange: (e) =>
                setValue('name', e.target.value, {
                  shouldValidate: true,
                  shouldDirty: true,
                  shouldTouch: true,
                }),
            })}
          />
          <S.InputButton type="button" onClick={onCheckDuplicatedName}>
            중복확인
          </S.InputButton>
        </S.InputDiv>
        <S.ErrorMessage>
          {errors.name?.message as React.ReactNode}
        </S.ErrorMessage>
        <S.InputDiv>
          <S.Input
            type="email"
            placeholder="이메일"
            {...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                message: '올바른 이메일 형식을 입력해주세요.',
              },
              onChange: (e) =>
                setValue('email', e.target.value, {
                  shouldValidate: true,
                  shouldDirty: true,
                  shouldTouch: true,
                }),
            })}
          />
          <S.InputButton
            type="button"
            onClick={
              noDuplicatedEmail
                ? onSendAuthNumberToEmail
                : onCheckDuplicatedEmail
            }
          >
            {noDuplicatedEmail ? '인증번호 전송' : '중복확인'}
          </S.InputButton>
        </S.InputDiv>
        <S.ErrorMessage>
          {errors.email?.message as React.ReactNode}
        </S.ErrorMessage>

        {authenticating && (
          <S.InputDiv>
            {authenticating && (
              <S.Input
                type="text"
                placeholder="이메일 인증 번호"
                {...register('emailAuthNumber', {
                  required: '인증번호를 입력해주세요.',
                  pattern: {
                    value: /[^ㄱ-ㅎ가-힣\s!@#$%]{0,8}$/,
                    message: '올바른 인증 번호를 입력해주세요.',
                  },
                  onChange: (e) =>
                    setValue('emailAuthNumber', e.target.value, {
                      shouldValidate: true,
                      shouldDirty: true,
                      shouldTouch: true,
                    }),
                })}
              />
            )}
            {authenticating && (
              <S.InputButton type="button" onClick={onCheckAuthNumber}>
                인증
              </S.InputButton>
            )}
          </S.InputDiv>
        )}
        <S.ErrorMessage>
          {errors.emailAuthNumber?.message as React.ReactNode}
        </S.ErrorMessage>

        <S.Input
          id="password"
          type="password"
          placeholder="비밀번호"
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/,
              message: '문자, 숫자, 기호를 포함한 8~20자를 입력해주세요.',
            },
            onChange: (e) =>
              setValue('password', e.target.value, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
              }),
          })}
        />
        <S.ErrorMessage>
          {errors.password?.message as React.ReactNode}
        </S.ErrorMessage>

        <S.Input
          type="password"
          placeholder="비밀번호 확인"
          {...register('passwordConfirm', {
            required: '비밀번호를 입력해주세요.',
            // pattern: {
            //   value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/,
            //   message: '문자, 숫자, 기호를 포함한 8~20자를 입력해주세요.',
            // },
            onChange: (e) =>
              setValue('passwordConfirm', e.target.value, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
              }),
            validate: (value) =>
              value === watchedPassword || '비밀번호가 일치하지 않습니다.',
          })}
        />
        <S.ErrorMessage>
          {errors.passwordConfirm?.message as React.ReactNode}
        </S.ErrorMessage>

        <S.Button type="submit">회원가입</S.Button>
        <S.Suggestion>
          <S.TextSuggestionLabel>회원이신가요?</S.TextSuggestionLabel>
          <button type="button">로그인</button>
        </S.Suggestion>
      </form>
    </Container>
  );
};

export default SignUp;
