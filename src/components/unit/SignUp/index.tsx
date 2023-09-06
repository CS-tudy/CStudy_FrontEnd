import { CheckDuplicatedEmail, CheckDuplicatedName, signUp } from 'api/auth';
import Container from 'components/commons/Container';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpForm } from 'types/Form';
import * as S from './style';
import React, { useState } from 'react';

const SignUp = () => {
  const [noDuplicatedEmail, SetNoDuplicatedEmail] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();

  const watchedName = watch('name');
  const watchedEmail = watch('email');
  const watchedPassword = watch('password', '');

  const submitForm = (formValues: SignUpForm) => {
    const { emailAuthNumber, passwordConfirm, ...rest } = formValues;
    console.log({ ...rest });
    signUp({ ...rest });
  };

  const onCheckDuplicatedName = async () => {
    try {
      const data = await CheckDuplicatedName(watchedName);
      console.log(data);
      // TODO: Headers에 토큰 형식의 값 찾을 수 없음 에러가 뜨는데, 회원가입인데 토큰 없어야하지않나?

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
    console.log(data);

    try {
      if (data.verify === 'true') {
        alert('사용할 수 있는 이메일입니다.');
        // 중복체크 버튼이 인증 버튼으로 바뀌게 하기
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
          <button type="button" onClick={onCheckDuplicatedName}>
            {noDuplicatedEmail ? '인증' : '중복체크'}
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
          <button type="button" onClick={onCheckDuplicatedEmail}>
            중복체크
          </button>
        </div>
        <S.ErrorMessage>
          {errors.email?.message as React.ReactNode}
        </S.ErrorMessage>

        <S.Input
          type="text"
          placeholder="이메일 인증 번호"
          {...register('emailAuthNumber', {
            required: '인증번호를 입력해주세요.',
            pattern: {
              value: /^[0-9]{6}$/,
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
        {/* <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage> */}
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
          <button>로그인</button>
        </S.Suggestion>
      </form>
    </Container>
  );
};

export default SignUp;
