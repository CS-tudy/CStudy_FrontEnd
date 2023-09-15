import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import * as Styled from './style';

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
  onErrorMsg,
  smallLabel,
}: InputProps) => {
  return (
    <Styled.Field>
      {label && (
        <Styled.Label smallLabel={smallLabel} htmlFor={id}>
          {label}
        </Styled.Label>
      )}
      <Styled.Input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(id, { required, pattern })}
        errors={errors}
        defaultValue={defaultValue}
        required={required}
      />
      {onErrorMsg && errors[id] && (
        <Styled.ErrorMsg errors={errors} id={id}>
          {errors[id]?.message as string}
        </Styled.ErrorMsg>
      )}
    </Styled.Field>
  );
};

export default Input;
