import { useForm, SubmitHandler } from 'react-hook-form';
import { SignInForm } from 'types/Form';
import { useSignIn } from 'hooks/@query/useSignIn';
import * as S from './style';
import { Button } from 'components/commons/Button/Style';

const SignInModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInForm>();

  const { mutate: SignIn } = useSignIn();

  const onSignInHandler: SubmitHandler<SignInForm> = (formData: SignInForm) => {
    SignIn({ ...formData });
  };

  return (
    <form onSubmit={handleSubmit(onSignInHandler)}>
      <S.Input
        type="email"
        placeholder="이메일"
        {...register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
            message: '올바른 이메일을 입력해주세요.',
          },
        })}
      />
      <S.ErrorMessage>
        <p>{errors.email?.message}</p>
      </S.ErrorMessage>
      <S.Input
        type="password"
        placeholder="비밀번호"
        {...register('password', {
          required: '비밀번호를 입력해주세요.',
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/,
            message: '문자, 숫자, 기호를 포함한 8~20자를 입력해주세요.',
          },
        })}
      />
      <S.ErrorMessage>
        <p>{errors.password?.message}</p>
      </S.ErrorMessage>
      <Button type="submit" variant="primary" size="full">
        로그인
      </Button>
    </form>
  );
};

export default SignInModal;
