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
import useRequestFilter from 'hooks/Request/useRequestFilter';

interface RequestListsProps {
  requestList: ToggleRequestList;
  page: number;
  handlePage: (page: number) => void;
}

const RequestList = ({ requestList, handlePage, page }: RequestListsProps) => {
  const { modalIsOpen, toggleModal } = useModal();

  const navigate = useNavigate();

  console.log(requestList);

  const openModal = () => {
    toggleModal();
  };

  // const handlePage = () => {};
  // const page = 0;

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
      <>
        <button onClick={openModal}>ConfirmModal</button>
        <S.ContentWrapper>
          {requestList?.totalElements === 0 && <div>게시글이 없습니다.</div>}
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
      </>
    </>
  );
};

export default RequestList;
