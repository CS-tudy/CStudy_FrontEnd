import Button from 'components/commons/Button/Button';
import Banner from 'components/main/Banner';
import Contents from 'components/main/Contents';

import { Suspense, lazy } from 'react';
import Skeleton from 'components/commons/Skeleton';
const Banner = lazy(() => import('../../components/main/Banner'));
import * as S from './style';
import SignInModal from 'components/unit/SignIn';
import { useSelector } from 'react-redux';
const Main = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );

  return (
    <S.Main>
      <Suspense fallback={<Skeleton />}>
        <Banner />
      </Suspense>
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
