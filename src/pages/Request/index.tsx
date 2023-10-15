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

  let count = 0;
  const [time, setTime] = useState(0);

  // const setIntervalTime = () => {
  //   setInterval(() => {
  //     count += 1;
  //     setTime(count);
  //   }, 1000);
  // };

  // useEffect(() => {
  //   setIntervalTime();
  // }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      count += 1;
      setTime(count);
    }, 1000);

    // Component unmount 시점 혹은 dependency 변경 시점에 interval 정리
    return () => clearInterval(timer);
  }, []);

  // 제출 버튼 누를때 time값을 받아와서 서버로 전송

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
