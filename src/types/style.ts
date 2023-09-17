import { FieldErrors } from 'react-hook-form';

export interface TextAreaStyleProps {
  errors: FieldErrors;
  id: string;
}

export interface InputStyleProps {
  errors: FieldErrors;
  id: string;
  value?: number | boolean;
}
