import * as S from './style';

const RequestItem = () => {
  return (
    <S.Container>
      {/* <Link to={`/board/${id}`} onClick={checkAndDisplayLoginModal}> */}
      <S.Article>
        <S.ArticleHeader>
          승인
          <S.Title>
            {/* {title} */}
            문제 올려주세요
          </S.Title>
        </S.ArticleHeader>
        <S.Content>{/* {description} */}글 요약</S.Content>
        <S.Detail>
          <span>
            {/* {memberName} */}
            test
          </span>
          ·
          <span>
            {/* {createAt} */}
            2023-09-23
          </span>
        </S.Detail>
      </S.Article>
      {/* </Link> */}
    </S.Container>
  );
};

export default RequestItem;
