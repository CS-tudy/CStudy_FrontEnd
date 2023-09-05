import { signUp } from 'api/auth';
import Container from 'components/commons/Container';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpForm } from 'types/Form';
import * as S from './style';
import React from 'react';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submitForm: SubmitHandler<SignUpForm> = (formValues: SignUpForm) => {
    void signUp({ ...formValues });
  };

  const EmailCheckHandler = () => {
    // state 혹은 useRef에 담아둔 이메일을 받아와서
    // const 값 = CheckDuplicatedEmail(email)
    // if(값.code === '400') alert("이미 존재하는 이메일입니다.")
    // if(값.code === '200')
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
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
          <button type="button" onClick={EmailCheckHandler}>
            중복체크
          </button>
        </div>
        {/* <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage> */}
        <S.ErrorMessage>
          {errors.name?.message as React.ReactNode}
        </S.ErrorMessage>
        <div>
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
          <button type="button">인증</button>
        </div>
        {/* <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage> */}
        <S.ErrorMessage>
          {errors.email?.message as React.ReactNode}
        </S.ErrorMessage>

        {/* <S.Input
          type="text"
          placeholder="이메일 인증 번호"
          {...register('emailNumber', {
            required: '인증번호를 입력해주세요.',
            pattern: {
              value: /^[0-9]{6}$/,
              message: '올바른 인증 번호를 입력해주세요.',
            },
            onChange: (e) =>
              setValue('emailNumber', e.target.value, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
              }),
          })}
        />
        <S.ErrorMessage>
          {errors.emailNumber?.message as React.ReactNode}
        </S.ErrorMessage> */}

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
        {/* <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage> */}
        <S.ErrorMessage>
          {errors.password?.message as React.ReactNode}
        </S.ErrorMessage>

        {/* <S.Input
          type="password"
          placeholder="비밀번호 확인"
          {...register('passwordConfirm', {
            required: '비밀번호를 다시 입력해주세요.',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/,
              message: '문자, 숫자, 기호를 포함한 8~20자를 입력해주세요.',
            },
            onChange: (e) =>
              setValue('passwordConfirm', e.target.value, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
              }),
          })}
        />
        <S.ErrorMessage>
          {errors.passwordConfirm?.message as React.ReactNode}
        </S.ErrorMessage> */}

        <S.Button type="submit">회원가입</S.Button>
        <S.Suggestion>
          <S.TextSuggestionLabel>회원이신가요?</S.TextSuggestionLabel>
          <button>로그인</button>
        </S.Suggestion>
      </form>
    </Container>
  );
};

export default SignUp;
