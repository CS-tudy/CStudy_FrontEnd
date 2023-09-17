import Container from 'components/commons/Container';
import Modal from 'components/unit/Modal';
import useModal from 'hooks/useModal';
import ConfirmModal from 'components/commons/Modal/ConfirmModal';
import RequestItem from '../RequestItem';
import { isLogin } from 'repository/auth';
import Button from 'components/commons/Button/Button';
import * as S from './style';
import { ToggleRequestList } from 'types/api';
import { useNavigate } from 'react-router-dom';
import Pagination from 'components/commons/Pagination';

interface RequestListsProps {
  requestList: ToggleRequestList;
  page: number;
  handlePage: (page: number) => void;
}

const RequestList = ({ requestList }: RequestListsProps) => {
  const { modalIsOpen, toggleModal } = useModal();

  const navigate = useNavigate();

  console.log(requestList);

  const openModal = () => {
    toggleModal();
  };

  const checkLogin = () => {
    if (!isLogin()) {
      alert('로그인 후 이용하실 수 있습니다.');
    } else {
      navigate('/request/new');
    }
  };

  const handlePage = () => {};
  const page = 0;

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
        {(requestList?.totalPages as number) > 0 && (
          <S.PaginationWrapper>
            <Pagination
              totalPages={requestList?.totalPages as number}
              handlePage={handlePage}
              page={page}
            />{' '}
          </S.PaginationWrapper>
        )}
      </Container>
    </>
  );
};

export default RequestList;
