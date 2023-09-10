import Button from 'components/commons/Button/Button';
import Banner from 'components/main/Banner';
import Contents from 'components/main/Contents';
import * as S from './style';
import SignInModal from 'components/unit/SignIn';
import { useSelector } from 'react-redux';

const Main = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );
  console.log(isAuthenticated);

  return (
    <S.Main>
      <div>
        <h2>버튼 컴포넡트</h2>
        <div>
          <div>
            <Button variant="primary" size="full">
              1
            </Button>
          </div>
          <div>
            <Button variant="primary" size="small">
              2
            </Button>
          </div>
          <div>
            <Button variant="primary" size="medium">
              3
            </Button>
          </div>
          <div>
            <Button variant="primary" size="large">
              5
            </Button>
          </div>
        </div>
      </div> */}
      <SignInModal />
      <Banner />
      <Contents />
    </S.Main>
  );
};

export default Main;

const Wrapper = styled.div`
  display: block;
  display: flex;
  justify-content: center;
  margin: 2rem;
`;
