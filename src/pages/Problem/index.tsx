import Container from 'components/commons/Container';
import * as S from './style';
import Table from 'components/commons/Table';
import { useEffect, useState } from 'react';
import { getProblemList, getProblemListTest } from 'api/problem';
import ProblemList from 'components/unit/Problem/ProblemList';
import Select from 'components/unit/Problem/Select';
import Filter from 'components/commons/Filter';
import { useGetProblemList } from 'hooks/@query/problem/useGetProblemList';
import { IProblem } from 'types/api';
import { useDispatch, useSelector } from 'react-redux';
import { handlePage, reset } from 'hooks/@redux/filterSlice';
import useStatusFilterSlice from 'hooks/@redux/Problem/useStatusFilterSlice';
import useQueryFilterSlice from 'hooks/@redux/Problem/useQueryFilterSlice';
import useCategoryFilterSlice from 'hooks/@redux/Problem/useCategoryFilterSlice';

const Problem = () => {
  const [problemList, setProblemList] = useState();
  const dispatch = useDispatch();
  const teststate = useSelector(state => state);
  const pageNumber = useSelector(
    (state: any) => state.persistedReducer.page.pageNumber,
  );
  console.log('state', teststate);

  const { status, statusValue, statusActive, handleStatusClick } =
    useStatusFilterSlice();
  const { category, categoryValue, categoryActive, handleCategoryClick } =
    useCategoryFilterSlice();
  const { query, QueryActive, handleToggle, isActive } = useQueryFilterSlice();

  const fetchProblemListTest = async () => {
    const data = await getProblemListTest();
    setProblemList(data.data);
  };

  // const problemList = useGetProblemList({
  //   categoryTitle: categoryFilter.categoryValue,
  //   status: statusFilter.statusValue,
  //   page: pageNumber,
  //   query: queryFilter.query,
  // })

  useEffect(() => {
    fetchProblemListTest();
    console.log(problemList);
  }, []);

  // const problemList = useGetProblemList({
  //   // categoryTitle: categoryFilter.categoryValue,
  //   // status: statusFilter.statusValue,
  //   // page: pageNumber,
  //   // query: queryFilter.query,
  //   questionTitle: '',
  //   categoryTitle: '',
  //   status: 0,
  //   memberId: 0,
  //   page: 0,
  //   query: '',
  // });

  console.log(problemList);

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
      <S.Div>
        <S.Contents>
          <S.Content1>
            <Filter className={isActive} onClick={handleToggle}>
              내가 푼 문제
            </Filter>
          </S.Content1>
          <S.Content2>
            <Select
              name={status}
              handleActive={handleStatusClick}
              isActive={statusActive}
              options={!statusActive ? filterOptionStatus : filterOptionTotal}
              optionsValue={
                !statusActive ? filterSelectIndex : noActiveFilterSelectIndex
              }
              selectedIndex={
                !statusActive ? filterSelectIndex : noActiveFilterSelectIndex
              }
            />
          </S.Content2>
          <S.Content3>
            <Select
              name={category}
              handleActive={handleCategoryClick}
              isActive={categoryActive}
              options={
                !categoryActive ? filterOptionCategory : filterOptionTotal
              }
              optionsValue={
                !categoryActive ? filterOptionCategoryValue : filterOptionEmpty
              }
              selectedIndex={
                !categoryActive ? filterSelectIndex : noActiveFilterSelectIndex
              }
            />
          </S.Content3>
        </S.Contents>
      </S.Div>
      <Container>
        <Table colRate={tableColRate} title={tableTitle}>
          <ProblemList problemList={problemList as IProblem} />
        </Table>
      </Container>
    </>
  );
};

export default Problem;
