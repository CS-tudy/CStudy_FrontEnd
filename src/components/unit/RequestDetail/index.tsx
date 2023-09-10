import Container from 'components/commons/Container';
import * as S from './style';
import Button from 'components/commons/Button/Button';

const RequestDetail = () => {
  return (
    <Container style={{ position: 'relative' }}>
      <S.Container>
        {/* <ApproveStatus flag={request?.flag} /> */}승인
        <S.Title>{/* {request?.title} */}문제 올려주세요</S.Title>
        <S.Detail>
          {/* {request?.memberName} */}test
          <span>·</span>
          {/* {request?.createAt} */}2023-09-01
        </S.Detail>
        <S.Content>{/* {request?.description} */}문제 만들어주세요</S.Content>
      </S.Container>
      <div style={{ position: 'absolute', bottom: '-70px', right: '60px' }}>
        <Button variant="gray" size="medium">
          돌아가기
        </Button>
      </div>
    </Container>
  );
};

export default RequestDetail;
