import { useNavigate, useParams } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import useGetRequest from 'hooks/@query/request/useGetRequest';

import Container from 'components/commons/Container';
import * as S from './style';
import Button from 'components/commons/Button/Button';
import ApproveStatus from 'components/commons/Status';
import { useDeleteRequest } from 'hooks/@query/request/useMutateRequest';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { getMyPage } from 'api/mypage';
import { useApproveRequest } from 'hooks/@query/request/useApproveRequest';

const RequestDetail = () => {
  const [loginUserInfo, setLoginUserInfo] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  const request = useGetRequest(id);
  const { mutate: deleteRequest } = useDeleteRequest();

  const ApproveRequest = useApproveRequest();

  const { handleSubmit } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = formData => {
    formData.id = request?.id;
    formData.flag = true;
    ApproveRequest(formData);
  };

  const handleNavigateEdit = () => {
    navigate(`/request/${id}/edit`);
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleDeleteRequest = () => {
    deleteRequest(id);
  };

  // 로그인 유저 정보 받아오기
  const fetchLoginUserInfo = async () => {
    const data = await getMyPage();
    console.log(data);
    // setLoginUserInfo(data);
  };

  useEffect(() => {
    fetchLoginUserInfo();
    // console.log(loginUserInfo);
  }, []);

  return (
    <Container>
      <S.Container>
        <S.Header>
          <S.PostInfo>
            <ApproveStatus flag={request?.flag} />
            <S.Title>{request?.title}</S.Title>
            <S.Detail>
              {request?.memberName}
              <span>·</span>
              {request?.createAt}
            </S.Detail>
          </S.PostInfo>
          <S.Options>
            <button onClick={handleNavigateEdit}>
              <AiFillEdit size={20} color="#aaa" />
            </button>{' '}
            <button onClick={handleDeleteRequest}>
              <AiFillDelete size={20} color="#aaa" />
            </button>
          </S.Options>
        </S.Header>
        <S.Content>{request?.description}</S.Content>
      </S.Container>
      <S.ButtonWrapper>
        <Button
          variant="primary"
          size="medium"
          disabled={request?.flag}
          onClick={handleSubmit(onSubmit)}
        >
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
