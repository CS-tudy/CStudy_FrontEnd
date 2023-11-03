import * as S from './style';

const ContentContainer = ({ children }: React.PropsWithChildren) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default ContentContainer;
