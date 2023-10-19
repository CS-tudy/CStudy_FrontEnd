import { Link } from 'react-router-dom';
import * as S from './style';
import workbook from 'assets/workbook.png';
import { isLogin } from 'repository/auth';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stroe';
import useModal from 'hooks/useModal';

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
  const isOpen = useModal();

  const checkAndDisplayLoginModal = (e: React.MouseEvent) => {
    if (!isLogin()) {
      e.preventDefault();
    }
  };

  return (
    <S.WorkBookCard>
      <Link to={`${id}`} onClick={checkAndDisplayLoginModal}>
        <S.Img src={fileName ? fileName : workbook} />
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
