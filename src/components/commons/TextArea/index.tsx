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
        // {...register(id, { required: '값을 입력해주세요.' })}
        errors={errors}
      />
      {errors[id] && (
        <S.ErrorMsg id={id}>{errors[id]?.message as string}</S.ErrorMsg>
      )}
    </S.Field>
  );
};

export default TextArea;
