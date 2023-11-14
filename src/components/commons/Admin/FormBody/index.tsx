import { PropsWithChildren } from 'react';
import * as S from './style';

const FormSection = ({ children }: PropsWithChildren) => {
  return <S.FormBody>{children}</S.FormBody>;
};

export default FormSection;
