import { useForm, SubmitHandler } from 'react-hook-form';
import { SignInForm } from 'types/Form';
import { useSignIn } from 'hooks/@query/useSignIn';
import * as S from './style';
import { Button } from 'components/commons/Button/Style';
import { useDispatch } from 'react-redux';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';
import { signupToggle } from 'hooks/@redux/registerModalSlice';

const SignInModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInForm>();

  const { mutate: SignIn } = useSignIn();
  const dispatch = useDispatch();
  const changeModalHandler = () => {
    dispatch(Logintoggle());
    dispatch(signupToggle());
  };

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
      <S.Suggestion>
        <S.TextSuggestionLabel>아직 가입하지 않으셨나요?</S.TextSuggestionLabel>
        <button type="button" onClick={changeModalHandler}>
          <S.MovingLogin>회원가입</S.MovingLogin>
        </button>
      </S.Suggestion>
    </form>
  );
};

export default SignInModal;
