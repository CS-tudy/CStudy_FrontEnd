import Button from 'components/Button/Button';
import Banner from 'components/main/Banner';
import Contents from 'components/main/Contents';
import * as S from './style';

const Main = () => {
  return (
    <S.Main>
      {/* <div>
        <h2>버튼 컴포넡트</h2>
        <div>
          <div>
            <Button variant="primary" size="full">
              버튼 종류 1
            </Button>
          </div>
          <div>
            <Button variant="primary" size="small">
              버튼 종류 2
            </Button>
          </div>
          <div>
            <Button variant="primary" size="medium">
              버튼 종류 3
            </Button>
          </div>
          <div>
            <Button variant="primary" size="large">
              버튼 종류 5
            </Button>
          </div>
        </div>
      </div> */}

      <Banner />
      <Contents />
    </S.Main>
  );
};

export default Main;
