import { useNavigate, useParams } from 'react-router-dom';

import useGetRequest from 'hooks/@query/request/useGetRequest';

import Container from 'components/commons/Container';
import * as S from './style';
import Button from 'components/commons/Button/Button';
import ApproveStatus from 'components/commons/Status';

const RequestDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const request = useGetRequest(id);

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <Container>
      <S.Container>
        <ApproveStatus flag={request?.flag} />
        <S.Title>{request?.title}</S.Title>
        <S.Detail>
          {request?.memberName}
          <span>·</span>
          {request?.createAt}
        </S.Detail>
        <button>수정</button> <button>삭제</button>
        <S.Content>{request?.description}</S.Content>
      </S.Container>
      <S.ButtonWrapper>
        <Button variant="primary" size="medium" onClick={handleNavigate}>
          승인하기
        </Button>
        <Button variant="gray" size="medium" onClick={handleNavigate}>
          돌아가기
        </Button>
      </S.ButtonWrapper>
    </Container>
  );
};

export default RequestDetail;
