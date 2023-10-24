import Input from 'components/commons/Input';
import Button from 'components/commons/Button/Button';
import * as S from './style';
import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import Modal from 'components/unit/Modal';
import MyPagePwd from '../MyPagePwd';
import MypageClose from '../MypageClose';

interface MypageInputProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors;
  passwordPattern: {
    value: RegExp;
    message: string;
  };
  handleChangePwdSubmit: (formData: FieldValues) => void;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MypageInput = ({
  register,
  handleSubmit,
  errors,
  passwordPattern,
  handleChangePwdSubmit,
  isActive,
  setIsActive,
}: MypageInputProps) => {
  return (
    <Modal toggleModal={() => isActive}>
      <S.PwdDiv>
        <S.PwdInner>
          <MypageClose setIsActive={setIsActive} />
          <S.PwdButton>
            <form method="put" onSubmit={handleSubmit(handleChangePwdSubmit)}>
              <S.Pwd>
                <MyPagePwd
                  register={register}
                  passwordPattern={passwordPattern}
                  errors={errors}
                />
              </S.Pwd>
              <Button type="submit" variant={'primary'} size={'full'}>
                변경하기
              </Button>
            </form>
          </S.PwdButton>
        </S.PwdInner>
      </S.PwdDiv>
    </Modal>
  );
};

export default MypageInput;
