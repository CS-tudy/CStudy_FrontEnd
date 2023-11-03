import * as S from './style';

interface ProblemDetailFooterProps {
  explain: string;
}

const ProblemDetailFooter = ({ explain }: ProblemDetailFooterProps) => {
  return (
    <S.Footer>
      <S.FooterComment>해설</S.FooterComment>
      <S.FooterCommentDesc>{explain}</S.FooterCommentDesc>
    </S.Footer>
  );
};

export default ProblemDetailFooter;
