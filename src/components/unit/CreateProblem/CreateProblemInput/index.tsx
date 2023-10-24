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
  checked,
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
          />
        </>
      )}
      {type === 'radio' && (
        <S.CheckBoxInput
          id={id}
          type={type}
          value={value}
          checked={checked}
          name={name}
          {...errors}
          {...(register(resgiterName), { onChange: () => onChange })}
        />
      )}
    </>
  );
};

export default memo(CreateProblemInput);
