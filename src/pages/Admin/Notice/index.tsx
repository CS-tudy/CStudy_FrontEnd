import ContentContainer from 'components/commons/ContentContainer';
import * as S from './style';
import { RequestNoticeList } from 'types/api';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import useGetAdminNoticeList from 'hooks/@query/board/useGetAdminNoticeList';
import AdminNoticeList from 'components/commons/Admin/AdminNotice';
import Pagination from 'components/commons/Pagination';
import useNoticeFilter from 'hooks/Notice/useNoticeFilter';

const AdminNoticeRequest = () => {
  const { noticeFilter, handlePage } = useNoticeFilter();

  const adminnoticeList = useGetAdminNoticeList({
    page: noticeFilter.pageNumber,
    title: '',
    content: '',
  });

  return (
    <>
      <ContentContainer>
        <ContentBodyWrapper>
          <AdminNoticeList
            adminnoticeList={adminnoticeList as RequestNoticeList}
          />
          <S.PaginationWrapper>
            <Pagination
              totalPages={adminnoticeList?.totalPages as number}
              handlePage={handlePage}
              page={adminnoticeList?.number as number}
            />
          </S.PaginationWrapper>
        </ContentBodyWrapper>
      </ContentContainer>
      ;
    </>
  );
};

export default AdminNoticeRequest;
