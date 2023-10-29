import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import * as S from './style';

interface AdminInputProps {
  id?: string;
  label?: string;
  name: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  value?: string;
}

const AdminInput = ({
  id,
  label,
  name,
  type,
  textarea,
  placeholder,
  disabled,
  required,
  register,
  errors,
  value,
}: AdminInputProps) => {
  return (
    <>
      {type === 'text' && (
        <S.AdminInputWrapper>
          <S.AdminBasicLabel htmlFor={id}>{label}</S.AdminBasicLabel>

          <S.AdminBasicInput
            id={id}
            disabled={disabled}
            type={type}
            errors={errors}
            placeholder={placeholder}
            {...register(name, { required })}
          />
        </S.AdminInputWrapper>
      )}
      {type === 'textarea' && (
        <S.AdminInputWrapper>
          <S.AdminBasicLabel htmlFor={id}>{label}</S.AdminBasicLabel>
          <S.AdminTextArea
            id={id}
            rows={5}
            disabled={disabled}
            errors={errors}
            placeholder={placeholder}
            {...register(name, { required })}
          />
        </S.AdminInputWrapper>
      )}
      {type === 'number' && (
        <S.AdminInputWrapper>
          <S.AdminBasicLabel htmlFor={id}>{label}</S.AdminBasicLabel>
          <S.AdminBasicInput
            id={id}
            disabled={disabled}
            type={type}
            errors={errors}
            {...register(name, {
              required,
              valueAsNumber: true,
              setValueAs: value => parseInt(value),
            })}
          />
        </S.AdminInputWrapper>
      )}
      {type === 'radio' && (
        <S.AdminInputWrapper>
          <S.AdminRadioLabel htmlFor={id}>
            <S.AdminRadioInput
              id={id}
              disabled={disabled}
              type={type}
              errors={errors}
              value={value}
              {...register(name, { required })}
            />
            {label && <span>{label}</span>}
          </S.AdminRadioLabel>
        </S.AdminInputWrapper>
      )}
      {type === 'checkbox' && (
        <S.AdminInputWrapper>
          <S.AdminCheckboxLabel htmlFor={id}>
            <S.AdminCheckboxInput
              id={id}
              disabled={disabled}
              type={type}
              errors={errors}
              value={value}
              {...register(name, { required })}
            />
            {label && <span>{label}</span>}
          </S.AdminCheckboxLabel>
        </S.AdminInputWrapper>
      )}
      {type === 'date' && (
        <S.AdminInputWrapper>
          <S.AdminDateLabel htmlFor={id}>{label}</S.AdminDateLabel>
          <S.AdminDateInput
            id={id}
            disabled={disabled}
            type={type}
            errors={errors}
            value={value}
            {...register(name, { required })}
          />
        </S.AdminInputWrapper>
      )}
    </>
  );
};

export default AdminInput;
