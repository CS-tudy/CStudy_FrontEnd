import RequestList from 'components/unit/Request/RequestList';
import { useGetToggleRequestList } from 'hooks/@query/request/useGetRequestList';
import { ToggleRequestList } from 'types/api';

import * as S from './style';
import LoginSwitchButton from 'components/unit/Request/LoginSwitchButton';
import Container from 'components/commons/Container';
import useRequestFilter from 'hooks/Request/useRequestFilter';
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
      <S.ContainerMarginTop />
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
