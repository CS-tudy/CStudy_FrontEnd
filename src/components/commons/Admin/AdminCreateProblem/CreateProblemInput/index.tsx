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
  name: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: () => void;
  checked?: boolean;
  errors: FieldErrors;
}

const CreateProblemInput = ({
  id,
  placeholder,
  type,
  register,
  name,
  label,
  value,
  onChange,
  errors,
  checked,
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
            {...register(name)}
            {...errors}
            required
          />
        </>
      )}
      {type === 'checkbox' && (
        <S.CheckBoxInput
          id={id}
          type={type}
          value={value}
          {...errors}
          checked={checked}
          {...register(name)}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default memo(CreateProblemInput);
