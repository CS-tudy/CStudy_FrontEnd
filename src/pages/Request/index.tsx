import RequestList from 'components/unit/Request/RequestList';
import { useGetToggleRequestList } from 'hooks/@query/request/useGetRequestList';
import { ToggleRequestList } from 'types/api';

import * as S from './style';
import LoginSwitchButton from 'components/unit/Request/LoginSwitchButton';
import { useState } from 'react';
import Container from 'components/commons/Container';
import Button from 'components/commons/Button/Button';
import useRequestFilter from 'hooks/Request/useRequestFilter';

const Request = () => {
  // const requestList = useGetToggleRequestList({ page: boardFilter.pageNumber, query: boardFilter.query });
  const { requestFilter, handlePage, handleToggle, isActive } =
    useRequestFilter();
  // const requestList = useGetToggleRequestList({
  //   query: 'requests',
  //   page: 0,
  //   sort: '',
  // });
  const requestList = useGetToggleRequestList({
    query: requestFilter.query,
    page: requestFilter.pageNumber,
    sort: '',
  });

  // const handlePage = () => {};
  // const handleToggle = () => {};
  // const pageNumber = 0;
  // const isActive = true;

  return (
    <Container>
      {/* <S.ButtonWrapper>
        <Button variant={'primary'} size={'medium'} onClick={checkLogin}>
          글 작성
        </Button>
      </S.ButtonWrapper> */}
      <S.Header>
        <LoginSwitchButton isActive={isActive} handleToggle={handleToggle} />
      </S.Header>
      <RequestList
        requestList={requestList as ToggleRequestList}
        handlePage={handlePage}
        page={requestFilter.pageNumber}
      />
    </Container>
  );
};

export default Request;
