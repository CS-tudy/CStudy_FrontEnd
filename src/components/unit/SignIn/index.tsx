import { useForm, SubmitHandler } from 'react-hook-form';
import { SignInForm } from 'types/Form';
import Container from 'components/commons/Container';
import * as S from './style';
import { Button } from 'components/Button/Style';
import { signIn } from 'api/auth';

const SignInModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInForm>();

  const onSignInHandler: SubmitHandler<SignInForm> = (formData: SignInForm) => {
    console.log(formData);
    signIn({ ...formData });
  };
  return (
    <Container>
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
        <Button type="submit" variant="primary" size="small">
          로그인
        </Button>
      </form>
    </Container>
  );
};

export default SignInModal;
