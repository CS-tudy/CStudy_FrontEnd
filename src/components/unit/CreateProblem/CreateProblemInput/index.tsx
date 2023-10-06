import { ChangeHandler, FieldValues, UseFormRegister } from 'react-hook-form';
import * as S from './style';

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
          {...(register(resgiterName), { onChange: () => onChange })}
        />
      )}
    </>
  );
};

export default CreateProblemInput;
