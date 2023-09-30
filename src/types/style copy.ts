import { FieldErrors } from 'react-hook-form';

export interface InputStyleProps {
  errors: FieldErrors;
  id: string;
  value?: number | boolean;
}

export interface TextAreaStyleProps {
  errors: FieldErrors;
  id: string;
}

export interface AdminInputStyleProps {
  errors: FieldErrors;
  name: string;
}
