import Button from 'components/commons/Button/Button';
import Contents from 'components/main/Contents';
import * as S from './style';
import { Suspense, lazy } from 'react';
import Skeleton from 'components/commons/Skeleton';
const Banner = lazy(() => import('../../components/main/Banner'));
const Main = () => {
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
