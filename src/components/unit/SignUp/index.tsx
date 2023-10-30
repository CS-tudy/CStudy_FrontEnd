import React from 'react';
import * as S from './style';
import { useSignUp } from 'hooks/@query/useSignUp';
import { useDispatch, useSelector } from 'react-redux';
import { signupToggle } from 'hooks/@redux/registerModalSlice';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';

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

  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: any) => state.persistedReducer.registerModal.isOpen,
  );

  const changeModalHandler = () => {
    dispatch(signupToggle());
    dispatch(Logintoggle());
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <S.InputWrapper>
        <S.Input
          type="text"
          placeholder="이름"
          {...register('name', {
            required: '이름을 입력해주세요.',
            pattern: {
              value: /^[a-zA-Z0-9가-힣]{2,8}$/,
              message: '2~8글자의 한글,영어를 입력해주세요.',
            },
            onChange: e =>
              setValue('name', e.target.value, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
              }),
          })}
        />
        <S.ButtonInsideInput type="button" onClick={onCheckDuplicatedName}>
          중복확인
        </S.ButtonInsideInput>
      </S.InputWrapper>
      <S.ErrorMessage>{errors.name?.message as string}</S.ErrorMessage>
      <S.InputWrapper>
        <S.Input
          type="email"
          placeholder="이메일"
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: '올바른 이메일 형식을 입력해주세요.',
            },
            onChange: e =>
              setValue('email', e.target.value, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
              }),
          })}
        />
        <S.ButtonInsideInput
          type="button"
          onClick={
            noDuplicatedEmail ? onSendAuthNumberToEmail : onCheckDuplicatedEmail
          }
        >
          {noDuplicatedEmail ? '인증번호 전송' : '중복확인'}
        </S.ButtonInsideInput>
      </S.InputWrapper>
      <S.ErrorMessage>
        {errors.email?.message as React.ReactNode}
      </S.ErrorMessage>

      {authenticating && (
        <S.InputWrapper>
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
                onChange: e =>
                  setValue('emailAuthNumber', e.target.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                  }),
              })}
            />
          )}
          {authenticating && (
            <S.ButtonInsideInput type="button" onClick={onCheckAuthNumber}>
              인증
            </S.ButtonInsideInput>
          )}
        </S.InputWrapper>
      )}
      <S.ErrorMessage>
        {errors.emailAuthNumber?.message as string}
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
          onChange: e =>
            setValue('password', e.target.value, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            }),
        })}
      />
      <S.ErrorMessage>{errors.password?.message as string}</S.ErrorMessage>

      <S.Input
        type="password"
        placeholder="비밀번호 확인"
        {...register('passwordConfirm', {
          required: '비밀번호를 입력해주세요.',
          onChange: e =>
            setValue('passwordConfirm', e.target.value, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            }),
          validate: value =>
            value === watchedPassword || '비밀번호가 일치하지 않습니다.',
        })}
      />
      <S.ErrorMessage>
        {errors.passwordConfirm?.message as string}
      </S.ErrorMessage>

      <S.Button type="submit">회원가입</S.Button>
      <S.Suggestion>
        <S.TextSuggestionLabel>회원이신가요?</S.TextSuggestionLabel>
        <button type="button" onClick={changeModalHandler}>
          <S.MovingLogin>로그인</S.MovingLogin>
        </button>
      </S.Suggestion>
    </form>
  );
};

export default SignUp;
