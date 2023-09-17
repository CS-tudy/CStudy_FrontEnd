import { FieldValues, UseFormRegister } from 'react-hook-form';
import * as S from './style';

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
}

const CreateProblemInput = ({
  id,
  placeholder,
  type,
  register,
  name,
  label,
  value,
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
          />
        </>
      )}
      {type === 'checkbox' && (
        <S.CheckBoxInput
          id={id}
          type={type}
          value={value}
          {...register(name)}
        />
      )}
    </>
  );
};

export default CreateProblemInput;
