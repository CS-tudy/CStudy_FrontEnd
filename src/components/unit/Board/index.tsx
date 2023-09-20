import { Link } from 'react-router-dom';
import * as S from './style';

const BoardList = () => {
  return (
    <S.Container>
      <Link to={`/notice/`}>
        <S.Article>
          <S.ContentWrapper>
            <S.Content>
              <S.Title>타이틀</S.Title>
              <S.Detail>
                <p>내용 미리보기</p>·<span>2023-06-03</span>
              </S.Detail>
            </S.Content>
          </S.ContentWrapper>
        </S.Article>
      </Link>
    </S.Container>
  );
};

export default BoardList;
