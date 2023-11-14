import Container from 'components/commons/Container';
import * as S from './style';
import Table from 'components/commons/Table';
import { useState } from 'react';
import ProblemList from 'components/unit/Problem/ProblemList';
import Filter from 'components/commons/Filter';
import { useGetProblemList } from 'hooks/@query/problem/useGetProblemList';
import { IProblem } from 'types/api';
import useStatusFilterSlice from 'hooks/@redux/Problem/useStatusFilterSlice';
import useQueryFilterSlice from 'hooks/@redux/Problem/useQueryFilterSlice';
import useCategoryFilterSlice from 'hooks/@redux/Problem/useCategoryFilterSlice';
import Pagination from 'components/commons/Pagination';
import _ from 'lodash';
import UseProblemFilterSlice from 'hooks/@redux/Problem/useProblemFilterSlice';
import SearchBar from 'components/commons/SearchBar';
import Select from 'components/commons/Select';
import ContainerBottom from 'components/commons/ContainerBottom';
import NoData from 'components/commons/NoData';
import { isAdmin, isLogin } from 'repository/auth';
import Button from 'components/commons/Button/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';
import { useEffect } from 'react';

const Problem = () => {
  const [inputValue, setInputValue] = useState('');

  const { status, statusValue, statusActive, handleStatusClick } =
    useStatusFilterSlice();
  const { category, categoryValue, categoryActive, handleCategoryClick } =
    useCategoryFilterSlice();
  const { query, queryActive, handleToggle } = useQueryFilterSlice();
  const { problemFilter, handlePage } = UseProblemFilterSlice();

  const problemList = useGetProblemList({
    questionTitle: inputValue,
    categoryTitle: categoryValue,
    status: statusValue,
    memberId: 0,
    page: problemFilter.pageNumber,
    query: query,
  });

  const filterOptionTotal = ['전체'];
  const filterOptionEmpty = [''];
  const noActiveFilterSelectIndex = [0];
  const filterSelectIndex = [0, 1, 2];
  const filterOptionStatus = ['전체', '완료', '실패'];
  const filterOptionCategory = [
    '전체',
    '자바',
    '네트워크',
    '운영체제',
    '데이터베이스',
  ];
  const filterOptionCategoryValue = [
    '',
    '자바',
    '네트워크',
    '운영체제',
    '데이터베이스',
  ];
  const tableColRate = ['10%', '15%', '60%', '15%'];
  const tableTitle = ['번호', '상태', '제목', '카테고리'];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateAdmin = () => {
    navigate('/admin/createproblem');
  };

  const checkLogin = () => {
    navigate('/');
    dispatch(Logintoggle());
  };

  useEffect(() => {
    if (!isLogin()) {
      checkLogin();
    }
  }, []);

  return (
    <>
      {/* {isLogin() ? ( */}
      <>
        {isAdmin() && (
          <S.ButtonWrapper>
            <Button variant="primary" size="medium" onClick={navigateAdmin}>
              문제 생성
            </Button>
          </S.ButtonWrapper>
        )}
        <S.ContainerHeader>
          <S.FilterWrapper>
            <S.SearchWrapper>
              <SearchBar
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </S.SearchWrapper>
            <S.FilterWrapper2>
              <S.QueryFilterWrapper>
                <Filter className={queryActive} onClick={handleToggle}>
                  내가 푼 문제
                </Filter>
              </S.QueryFilterWrapper>
              <S.StatusFilterWrapper>
                <Select
                  name={status}
                  handleActive={handleStatusClick}
                  isActive={statusActive}
                  options={
                    !queryActive ? filterOptionStatus : filterOptionTotal
                  }
                  optionsValue={
                    !queryActive ? filterSelectIndex : noActiveFilterSelectIndex
                  }
                  selectedIndex={
                    !queryActive ? filterSelectIndex : noActiveFilterSelectIndex
                  }
                />
              </S.StatusFilterWrapper>
              <S.CategoryFilterWrapper>
                <Select
                  name={category}
                  handleActive={handleCategoryClick}
                  isActive={categoryActive}
                  options={
                    !queryActive ? filterOptionCategory : filterOptionTotal
                  }
                  optionsValue={
                    !queryActive ? filterOptionCategoryValue : filterOptionEmpty
                  }
                  selectedIndex={
                    !queryActive ? filterSelectIndex : noActiveFilterSelectIndex
                  }
                />
              </S.CategoryFilterWrapper>
            </S.FilterWrapper2>
          </S.FilterWrapper>
        </S.ContainerHeader>
        <Container>
          {problemList?.totalElements === 0 ? (
            <tr>
              <td colSpan={4}>
                <NoData>문제풀이 문제가 없습니다.</NoData>
              </td>
            </tr>
          ) : (
            <Table colRate={tableColRate} title={tableTitle}>
              <ProblemList problemList={problemList as IProblem} />
            </Table>
          )}
        </Container>
        <ContainerBottom>
          {(problemList?.totalPages as number) > 0 && (
            <Pagination
              totalPages={problemList?.totalPages as number}
              handlePage={handlePage}
              page={problemFilter.pageNumber}
            />
          )}
        </ContainerBottom>
      </>
      {/* )
      : (
        <Navigate to="/" />
      )} */}
    </>
  );
};

export default Problem;
