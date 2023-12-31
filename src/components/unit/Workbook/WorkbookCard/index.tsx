import { Link } from 'react-router-dom';
import * as S from './style';
import workbook from 'assets/workbook.png';
import { isLogin } from 'repository/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';

interface WorkBookCardProps {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  fileName: string;
}

const WorkBookCard = ({
  id,
  title,
  createdAt,
  description,
  fileName,
}: WorkBookCardProps) => {
  const dispatch = useDispatch();

  const checkLogin = (e: React.MouseEvent) => {
    if (!isLogin()) {
      e.preventDefault();
      dispatch(Logintoggle());
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = workbook;
  };

  return (
    <S.WorkBookCard>
      <Link to={`${id}`} onClick={checkLogin}>
        <S.Img
          src={fileName ? fileName : workbook}
          onError={handleImageError}
        />
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Time>{createdAt}</S.Time>
        </S.Info>
      </Link>
    </S.WorkBookCard>
  );
};

export default WorkBookCard;
