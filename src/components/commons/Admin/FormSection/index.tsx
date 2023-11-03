import { PropsWithChildren, memo } from 'react';
import FormContentHeader from '../FormContentHeader';
import * as S from './style';

interface FormSectionProps {
  title: string;
  subtitle?: string;
}

const FormSection = ({
  children,
  title,
  subtitle,
}: PropsWithChildren<FormSectionProps>) => {
  return (
    <S.FormSectionWrapper>
      <FormContentHeader title={title} subtitle={subtitle} />
      <S.ContentBody>{children}</S.ContentBody>
    </S.FormSectionWrapper>
  );
};

export default memo(FormSection);
