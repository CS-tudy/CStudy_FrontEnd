import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './style';

interface WorkBookCardProps {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

const WorkBookCard = ({
  id,
  title,
  createdAt,
  description,
}: WorkBookCardProps) => {
  //   const loginModal = useLoginModal();
  //   const checkAndDisplayLoginModal = (e: React.MouseEvent) => {
  //     if (!isLogin()) {
  //       e.preventDefault();
  //       loginModal.onOpen();
  //     }
  //   };

  const getCategory = useCallback((title: string) => {
    const categories = ['자바', '데이터베이스', '네트워크', '운영체제'];

    for (const category of categories) {
      if (title.includes(category)) {
        return category;
      }
    }
    return '';
  }, []);

  return (
    <Styled.WorkBookCard>
      <Link to={`${id}`}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Time>{createdAt}</Styled.Time>
        <Styled.Img category={getCategory(title)} />
        <Styled.Description>{description}</Styled.Description>
      </Link>
    </Styled.WorkBookCard>
  );
};

export default WorkBookCard;
