import Container from 'components/commons/Container';
import * as S from './style';
import Table from 'components/commons/Table';
import { useEffect, useState } from 'react';
import { getProblemList, getProblemListTest } from 'api/problem';
import ProblemList from 'components/unit/Problem/ProblemList';
import Select from 'components/unit/Problem/Select';
import Filter from 'components/commons/Filter';
import { useGetProblemList } from 'hooks/@query/problem/useGetProblemList';
import { IProblemList } from 'types/api';

const Problem = () => {
  const [problemList, setProblemList] = useState();

  const fetchProblemListTest = async () => {
    const data = await getProblemListTest();
    setProblemList(data.data);
  };

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

  const tableColRate = ['10%', '15%', '60%', '15%'];
  const tableTitle = ['번호', '상태', '제목', '카테고리'];

  return (
    <>
      <S.Div>
        <S.Contents>
          <S.Content1>
            <Filter>내가 푼 문제</Filter>
          </S.Content1>
          <S.Content2>
            <Select />
          </S.Content2>
          <S.Content3>
            <Select />
          </S.Content3>
        </S.Contents>
      </S.Div>
      <Container>
        <Table colRate={tableColRate} title={tableTitle}>
          {/* <ProgramFilterTBody problemList={problemList as Problem} /> */}
          <ProblemList problemList={problemList as IProblemList} />
        </Table>
      </Container>
    </>
  );
};

export default Problem;
