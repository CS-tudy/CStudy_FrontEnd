import * as Styled from './style';

const ContentContainer = ({ children }: React.PropsWithChildren) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default ContentContainer;
