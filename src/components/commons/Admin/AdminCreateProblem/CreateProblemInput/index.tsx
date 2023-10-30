import {
  ChangeHandler,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import * as S from './style';
import { memo } from 'react';

interface CreateProblemInputProps {
  label?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  name?: string;
  resgiterName: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: ChangeHandler;
  checked?: boolean;
  errors: FieldErrors;
}

const CreateProblemInput = ({
  id,
  placeholder,
  type,
  register,
  name,
  resgiterName,
  label,
  value,
  onChange,
  errors,
}: CreateProblemInputProps) => {
  return (
    <>
      {type === 'text' && (
        <>
          <S.Label htmlFor={id}>{label}</S.Label>
          <S.Input
            id={id}
            placeholder={placeholder}
            type={type}
            {...register(resgiterName)}
            {...errors}
            required
          />
        </>
      )}
      {type === 'radio' && (
        <S.CheckBoxInput
          id={id}
          type={type}
          value={value}
          name={name}
          {...errors}
          {...(register(resgiterName), { onChange: () => onChange })}
          required
        />
      )}
    </>
  );
};

export default memo(CreateProblemInput);