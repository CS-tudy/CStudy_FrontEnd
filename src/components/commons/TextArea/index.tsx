import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import * as S from './style';

interface TextAreaProps {
  id: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextArea = ({
  id,
  label,
  disabled,
  required,
  register,
  errors,
  placeholder,
}: TextAreaProps) => {
  return (
    <S.Field>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.TextArea
        id={id}
        rows={20}
        placeholder={placeholder}
        disabled={disabled}
        {...register(id, { required })}
        errors={errors}
      />
    </S.Field>
  );
};

export default TextArea;
