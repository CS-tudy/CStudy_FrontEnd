import Container from 'components/commons/Container';
import Modal from 'components/unit/Modal';
import useModal from 'hooks/useModal';
import ConfirmModal from 'components/commons/Modal/ConfirmModal';
import RequestItem from '../RequestItem';
import { isLogin } from 'repository/auth';
import { getRequestListTest } from 'api/request';
import { useEffect, useState } from 'react';
import Button from 'components/commons/Button/Button';
import * as S from './style';

const RequestList = () => {
  const [requestList, setRequestList] = useState();
  const { modalIsOpen, toggleModal } = useModal();
  const fetchRequestList = async () => {
    const data = await getRequestListTest();
    setRequestList(data.data);
  };

  useEffect(() => {
    fetchRequestList();
    console.log(requestList);
  }, []);

  const openModal = () => {
    toggleModal();
  };

  const checkLogin = () => {
    if (!isLogin()) {
      alert('로그인해야함');
    } else {
      alert('로그인돼있음');
    }
  };

  return (
    <>
      {modalIsOpen && (
        <Modal toggleModal={toggleModal}>
          <ConfirmModal
            title="대회에 참가하시겠습니까?"
            confirmText="참가하기"
            cancelText="돌아가기"
            isOpen={modalIsOpen}
            // handleConfirm={handleConfirm}
            // handleCancel={handleCancel}
            // isLoading={isLoading}
          />
        </Modal>
      )}
      <Container>
        <button onClick={openModal}>ConfirmModal</button>
        <S.ButtonWrapper>
          <Button variant={'primary'} size={'medium'} onClick={checkLogin}>
            글 작성
          </Button>
        </S.ButtonWrapper>
        <S.ContentWrapper>
          {requestList?.content?.map(props => (
            <RequestItem key={props.id} {...props} />
          ))}
        </S.ContentWrapper>
      </Container>
    </>
  );
};

export default RequestList;
