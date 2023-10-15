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
import Select from 'components/unit/Problem/Select';
import Filter from 'components/commons/Filter';
import { useGetProblemList } from 'hooks/@query/problem/useGetProblemList';
import { IProblem } from 'types/api';
import { useDispatch, useSelector } from 'react-redux';
import { handlePage, reset } from 'hooks/@redux/filterSlice';
import useStatusFilterSlice from 'hooks/@redux/Problem/useStatusFilterSlice';
import useQueryFilterSlice from 'hooks/@redux/Problem/useQueryFilterSlice';
import useCategoryFilterSlice from 'hooks/@redux/Problem/useCategoryFilterSlice';
import Pagination from 'components/commons/Pagination';
import _ from 'lodash';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import UseProblemFilterSlice from 'hooks/@redux/Problem/useProblemFilterSlice';
import SearchBar from 'components/commons/SearchBar';

const Problem = () => {
  const [problemList, setProblemList] = useState<IProblem>();
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
  const { query, queryActive, handleToggle, isActive } = useQueryFilterSlice();

  const fetchProblemListTest = async () => {
    const res = await getProblemListTest();
    setProblemList(res.data);
  };

  useEffect(() => {
    fetchProblemListTest();
    console.log(problemList);
  }, []);

  // const problemList = useGetProblemList({
  //   questionTitle: 'Question',
  //   categoryTitle: categoryValue,
  //   status: statusValue,
  //   memberId: 0,
  //   page: pageNumber,
  //   query: query,
  // });

  // console.log(problemList);

  const { status, statusValue, statusActive, handleStatusClick } =
    useStatusFilterSlice();
  const { category, categoryValue, categoryActive, handleCategoryClick } =
    useCategoryFilterSlice();
  const { query, queryActive, handleToggle, isActive } = useQueryFilterSlice();

  // const fetchProblemListTest = async () => {
  //   const res = await getProblemListTest();
  //   setProblemList(res.data);
  // };

  // useEffect(() => {
  //   fetchProblemListTest();
  //   console.log(problemList);
  // }, []);

  const problemList = useGetProblemList({
    questionTitle: 'Question',
    categoryTitle: categoryValue,
    status: statusValue,
    memberId: 0,
    page: problemFilter.pageNumber,
    query: query,
  });

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

  // const getDebounce = _.debounce(value => {
  //   // ({ search: value, page: 1 });
  //   useGetProblemList({ questionTitle: value });
  // }, 500);

  // const onChangeSearchbar = (event: ChangeEvent): void => {
  //   getDebounce(event.target.value);
  // };

  // =========================================== //

  // const onChangeSearchbar = (event: ChangeEvent): void => {
  //   // getDebounce(event.target.value);
  //   useGetProblemList({ questionTitle: event.target.value });
  // };

  // =========================================== //

  // const [inputValue, setInputValue] = useState('');

  // const debouncedSave = _.debounce(value => {
  //   useGetProblemList({ questionTitle: value });
  // }, 500);

  // useEffect(() => {
  //   if (inputValue) {
  //     debouncedSave(inputValue);
  //   }
  // }, [inputValue]);

  // const onChangeSearchbar = event => {
  //   setInputValue(event.target.value);
  // };

  // =========================================== //

  // // Debounce the inputValue with lodash's _.debounce function
  // const debouncedInput = useMemo(() => _.debounce(setInputValue, 500), []);

  // const onChangeSearchbar = (event: ChangeEvent): void => {
  //   // Cancel the previous debounced value
  //   debouncedInput.cancel();

  //   // Set the new debounced value
  //   debouncedInput(event.target.value);
  // };

  // useEffect(() => {
  //   if (inputValue) {
  //     useGetProblemList({ questionTitle: inputValue });
  //   }
  // }, [inputValue]);

  // =========================================== //

  const handleLoadSearch = async (e: any) => {
    if (e.key === 'Enter') {
      // useGetProblemList({ questionTitle: inputValue });
      const res = await getProblemListSearch(e.target.value);
      console.log(e.target.value);
      // setProblemList(res.data);
    }
  };

  return (
    <>
      {' '}
      <input
        type="text"
        style={{ border: '1px solid gray' }}
        placeholder="검색어를 입력해 주세요."
        onChange={e => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        onKeyDown={handleLoadSearch}
      />
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      {/* <form  onSubmit={handleSubmit(onSubmit)}>
        <input
          name="searchTerm"
          style={{ border: '1px solid gray' }}
          ref={register}
          placeholder="검색어를 입력하세요."
        />
        <button type="submit">검색</button>
      </form> */}
      <div>
        {/* <input
          type="text"
          style={{ border: '1px solid gray' }}
          placeholder="검색어를 입력해 주세요."
          onChange={onChangeSearchbar}
          value={inputValue}
        /> */}
        <input
          type="text"
          style={{ border: '1px solid gray' }}
          placeholder="검색어를 입력해 주세요."
          onChange={e => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          onKeyDown={handleLoadSearch}
        />
      </div>
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
              options={!isActive ? filterOptionStatus : filterOptionTotal}
              optionsValue={
                !isActive ? filterSelectIndex : noActiveFilterSelectIndex
              }
              selectedIndex={
                !isActive ? filterSelectIndex : noActiveFilterSelectIndex
              }
            />
          </S.Content2>
          <S.Content3>
            <Select
              name={category}
              handleActive={handleCategoryClick}
              isActive={categoryActive}
              options={!isActive ? filterOptionCategory : filterOptionTotal}
              optionsValue={
                !isActive ? filterOptionCategoryValue : filterOptionEmpty
              }
              selectedIndex={
                !isActive ? filterSelectIndex : noActiveFilterSelectIndex
              }
            />
          </S.Content3>
        </S.Contents>
      </S.Div>
      <Container>
        <Table colRate={tableColRate} title={tableTitle}>
          <ProblemList problemList={problemList as IProblem} />
        </Table>
        {(problemList?.totalPages as number) > 0 && (
          <S.PaginationWrapper>
            <Pagination
              totalPages={problemList?.totalPages as number}
              handlePage={handlePage}
              page={problemFilter.pageNumber}
            />
          </S.PaginationWrapper>
        )}
      </Container>
    </>
  );
};

export default Problem;
