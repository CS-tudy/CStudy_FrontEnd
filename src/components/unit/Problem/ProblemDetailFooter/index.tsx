import * as Styled from './style';

interface ProblemDetailFooterProps {
  explain: string;
}

const ProblemDetailFooter = ({ explain }: ProblemDetailFooterProps) => {
  return (
    <Styled.Footer>
      <Styled.FooterComment>해설</Styled.FooterComment>
      <Styled.FooterCommentDesc>{explain}</Styled.FooterCommentDesc>
    </Styled.Footer>
  );
};

export default ProblemDetailFooter;
