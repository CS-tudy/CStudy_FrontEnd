import useModal from 'hooks/useModal';
import RequestItem from '../RequestItem';
import * as S from './style';
import { ToggleRequestList } from 'types/api';
import { useNavigate } from 'react-router-dom';
import NoData from 'components/commons/NoData';

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

  return (
    <>
      <S.ContentWrapper>
        {requestList?.totalElements === 0 && (
          <NoData>문제 요청 글이 없습니다.</NoData>
        )}
        {requestList?.content?.map(props => (
          <RequestItem key={props.id} {...props} />
        ))}
      </S.ContentWrapper>
    </>
  );
};

export default RequestList;
