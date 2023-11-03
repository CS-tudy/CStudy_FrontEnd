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
import { useApproveRequest } from 'hooks/@query/request/useApproveRequest';
import { isAdmin, userInfo } from 'repository/auth';
import { LoginUserDto } from 'types/problem';
import Modal from 'components/commons/Modal/Modal';
import ConfirmModal from 'components/commons/Modal/ConfirmModal';
import useModal from 'hooks/useModal';
import ContentContainer from 'components/commons/ContentContainer';

const RequestDetail = () => {
  const [userInfoData, setUserInfoData] = useState<LoginUserDto | null>();

  const { requestId } = useParams();
  const navigate = useNavigate();

  const request = useGetRequest(requestId);
  const { mutate: deleteRequest } = useDeleteRequest();

  const ApproveRequest = useApproveRequest();

  const { handleSubmit } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = formData => {
    formData.id = request?.id;
    formData.flag = true;
    ApproveRequest(formData);
  };

  const handleNavigateEdit = () => {
    navigate(`/request/${requestId}/edit`);
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleDeleteRequest = () => {
    deleteRequest(requestId);
  };

  useEffect(() => {
    console.log(userInfo()?.memberId);
    setUserInfoData(userInfo());
  }, []);

  const { modalIsOpen, toggleModal } = useModal();

  return (
    <>
      {modalIsOpen && (
        <Modal toggleModal={toggleModal}>
          <ConfirmModal
            title="게시글을 삭제하시겠습니까?"
            confirmText="삭제하기"
            cancelText="돌아가기"
            isOpen={modalIsOpen}
            handleConfirm={handleDeleteRequest}
            handleCancel={toggleModal}
            // isLoading={isLoading}
          />
        </Modal>
      )}
      <ContentContainer>
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
              {/* 수정삭제버튼 */}
              {request?.memberId === userInfoData?.memberId ? (
                <S.Options>
                  <button onClick={handleNavigateEdit}>
                    <AiFillEdit size={20} color="#aaa" />
                  </button>{' '}
                  <button onClick={toggleModal}>
                    <AiFillDelete size={20} color="#aaa" />
                  </button>
                </S.Options>
              ) : (
                ''
              )}
            </S.Header>
            <S.Content>{request?.description}</S.Content>
          </S.Container>
          <S.ButtonWrapper>
            {isAdmin() ? (
              <>
                <Button
                  variant="primary"
                  size="medium"
                  disabled={request?.flag}
                  onClick={handleSubmit(onSubmit)}
                >
                  승인하기
                </Button>
                <Button
                  variant="gray"
                  size="medium"
                  onClick={handleNavigateBack}
                >
                  돌아가기
                </Button>
              </>
            ) : (
              <Button variant="gray" size="medium" onClick={handleNavigateBack}>
                돌아가기
              </Button>
            )}
          </S.ButtonWrapper>
        </Container>
      </ContentContainer>
    </>
  );
};

export default RequestDetail;
