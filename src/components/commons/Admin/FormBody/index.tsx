import { PropsWithChildren } from 'react';
import * as Styled from './style';

const FormSection = ({ children }: PropsWithChildren) => {
  return <Styled.FormBody>{children}</Styled.FormBody>;
};

export default FormSection;
