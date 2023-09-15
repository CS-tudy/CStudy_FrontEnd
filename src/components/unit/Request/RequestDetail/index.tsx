import { useNavigate, useParams } from 'react-router-dom';

import useGetRequest from 'hooks/@query/request/useGetRequest';

import Container from 'components/commons/Container';
import * as S from './style';
import Button from 'components/commons/Button/Button';
import ApproveStatus from 'components/commons/Status';
import { useDeleteRequest } from 'hooks/@query/request/useMutateRequest';

const RequestDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const request = useGetRequest(id);
  const { mutate: deleteRequest } = useDeleteRequest();

  const handleNavigateEdit = () => {
    navigate(`/request/${id}/edit`);
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleDeleteRequest = () => {
    deleteRequest(id);
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
        <button onClick={handleNavigateEdit}>수정</button>{' '}
        <button onClick={handleDeleteRequest}>삭제</button>
        <S.Content>{request?.description}</S.Content>
      </S.Container>
      <S.ButtonWrapper>
        <Button variant="primary" size="medium">
          승인하기
        </Button>
        <Button variant="gray" size="medium" onClick={handleNavigateBack}>
          돌아가기
        </Button>
      </S.ButtonWrapper>
    </Container>
  );
};

export default RequestDetail;
