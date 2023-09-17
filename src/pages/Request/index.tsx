import RequestList from 'components/unit/Request/RequestList';
import { useGetToggleRequestList } from 'hooks/@query/request/useGetRequestList';
import { useEffect } from 'react';
import { ToggleRequestList } from 'types/api';

const Request = () => {
  // const requestList = useGetToggleRequestList({ page: boardFilter.pageNumber, query: boardFilter.query });
  const requestList = useGetToggleRequestList({
    target: 'requests',
    page: 0,
    sort: '',
  });

  const handlePage = () => {};
  const pageNumber = 0;

  return (
    <>
      <RequestList
        requestList={requestList as ToggleRequestList}
        handlePage={handlePage}
        page={pageNumber}
      />
    </>
  );
};

export default Request;
