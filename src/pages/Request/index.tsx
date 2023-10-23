import RequestList from 'components/unit/Request/RequestList';
import { useGetToggleRequestList } from 'hooks/@query/request/useGetRequestList';
import { ToggleRequestList } from 'types/api';

import * as S from './style';
import LoginSwitchButton from 'components/unit/Request/LoginSwitchButton';
import { useEffect, useState } from 'react';
import Container from 'components/commons/Container';
import Button from 'components/commons/Button/Button';
import useRequestFilter from 'hooks/Request/useRequestFilter';
import { setTokenSourceMapRange } from 'typescript';
import { CiTimer } from 'react-icons/ci';
import { IoIosTimer } from 'react-icons/io';

const Request = () => {
  const { requestFilter, handlePage, handleToggle, isActive } =
    useRequestFilter();

  const requestList = useGetToggleRequestList({
    query: requestFilter.query,
    page: requestFilter.pageNumber,
    sort: '',
  });

  return (
    <Container>
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
