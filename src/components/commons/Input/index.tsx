import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import * as S from './style';

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  defaultValue?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  onErrorMsg?: boolean;
  smallLabel?: boolean;
}

const Input = ({
  id,
  label,
  type = 'text',
  disabled,
  required,
  register,
  errors,
  placeholder,
  defaultValue,
  pattern,
  smallLabel,
}: InputProps) => {
  return (
    <S.Field>
      {label && (
        <S.Label smallLabel={smallLabel} htmlFor={id}>
          {label}
        </S.Label>
      )}
      <S.Input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(id, { required, pattern })}
        errors={errors}
        defaultValue={defaultValue}
        required={required}
      />
      {errors[id] && (
        <S.ErrorMsg errors={errors} id={id}>
          {errors[id]?.message as string}
        </S.ErrorMsg>
      )}
    </S.Field>
  );
};

export default Input;
