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
import Pagination from 'components/commons/Pagination';
import ContainerBottom from 'components/commons/ContainerBottom';
import ContainerTop from 'components/commons/ContainerTop';
import ContentContainer from 'components/commons/ContentContainer';

const Request = () => {
  const { requestFilter, handlePage, handleToggle, isActive } =
    useRequestFilter();

  const requestList = useGetToggleRequestList({
    query: requestFilter.query,
    page: requestFilter.pageNumber,
    sort: '',
  });

  return (
    <ContentContainer>
      <ContainerTop>
        <LoginSwitchButton isActive={isActive} handleToggle={handleToggle} />
      </ContainerTop>
      {/* <S.ContainerMarginTop /> */}
      <Container>
        <RequestList
          requestList={requestList as ToggleRequestList}
          handlePage={handlePage}
          page={requestFilter.pageNumber}
        />
      </Container>
      <ContainerBottom>
        {(requestList?.totalPages as number) > 0 && (
          <Pagination
            totalPages={requestList?.totalPages as number}
            handlePage={handlePage}
            page={requestFilter.pageNumber}
          />
        )}
      </ContainerBottom>
    </ContentContainer>
  );
};

export default Request;
