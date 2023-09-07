import React from 'react';
import Container from 'components/commons/Container';
import * as S from './style';
import { useSignUp } from 'hooks/useSignUp';

const SignUp = () => {
  const {
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
  } = useSignUp();

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
