import { memo } from 'react';
import * as S from './style';

interface FormContentHeaderProps {
  title: string;
  subtitle?: string;
}

const FormContentHeader = ({ title, subtitle }: FormContentHeaderProps) => {
  return (
    <S.ContentHeader>
      <S.ContentTitle>{title}</S.ContentTitle>
      <S.ContentSubTitle>{subtitle}</S.ContentSubTitle>
    </S.ContentHeader>
  );
};

export default memo(FormContentHeader);
