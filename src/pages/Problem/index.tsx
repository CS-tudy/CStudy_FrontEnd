import Container from 'components/commons/Container';
import * as S from './style';
import Table from 'components/commons/Table';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  getProblemList,
  getProblemListSearch,
  getProblemListTest,
} from 'api/problem';
import ProblemList from 'components/unit/Problem/ProblemList';
// import Select from 'components/unit/Problem/Select';
import Filter from 'components/commons/Filter';
import { useGetProblemList } from 'hooks/@query/problem/useGetProblemList';
import { IProblem } from 'types/api';
import { useDispatch, useSelector } from 'react-redux';
import { handlePage, reset, setTitle } from 'hooks/@redux/filterSlice';
import useStatusFilterSlice from 'hooks/@redux/Problem/useStatusFilterSlice';
import useQueryFilterSlice from 'hooks/@redux/Problem/useQueryFilterSlice';
import useCategoryFilterSlice from 'hooks/@redux/Problem/useCategoryFilterSlice';
import Pagination from 'components/commons/Pagination';
import _ from 'lodash';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import UseProblemFilterSlice from 'hooks/@redux/Problem/useProblemFilterSlice';
import SearchBar from 'components/commons/SearchBar';
import Select from 'components/commons/Select';
import ContainerTop from 'components/commons/ContainerTop';
import ContainerBottom from 'components/commons/ContainerBottom';

const Problem = () => {
  // const [problemList, setProblemList] = useState<IProblem>();
  const [titleValue, setTitleValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const teststate = useSelector(state => state);
  const pageNumber = useSelector(
    (state: any) => state.rootReducer.page.pageNumber,
  );
  // console.log('state', teststate);
  const { register, handleSubmit } = useForm();

  const { status, statusValue, statusActive, handleStatusClick } =
    useStatusFilterSlice();
  const { category, categoryValue, categoryActive, handleCategoryClick } =
    useCategoryFilterSlice();
  const { query, queryActive, handleToggle } = useQueryFilterSlice();
  const { problemFilter, handlePage } = UseProblemFilterSlice();

  console.log('filter', problemFilter);

  const problemList = useGetProblemList({
    questionTitle: inputValue,
    categoryTitle: categoryValue,
    status: statusValue,
    memberId: 0,
    page: problemFilter.pageNumber,
    query: query,
  });

  console.log(problemList);
  console.log(categoryValue);
  console.log(inputValue);

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

  return (
    <>
      {' '}
      <S.ContainerHeader>
        <S.FilterWrapper>
          <S.SearchWrapper>
            <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
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
                options={!queryActive ? filterOptionStatus : filterOptionTotal}
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
        <Table colRate={tableColRate} title={tableTitle}>
          <ProblemList problemList={problemList as IProblem} />
        </Table>
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
  );
};

export default Problem;
