import * as S from './style';
import loadingSpinner from 'assets/loading.gif';

const LoadingSpinner = () => {
  return (
    <S.LoadingSpinner>
      <S.Spinner>
        <img src={loadingSpinner} alt="Loading" width="150px" />
      </S.Spinner>
    </S.LoadingSpinner>
  );
};

export default LoadingSpinner;
