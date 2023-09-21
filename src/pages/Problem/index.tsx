import Container from 'components/commons/Container';
import * as S from './style';
import Table from 'components/commons/Table';
import { useEffect, useState } from 'react';
import { getProblemList } from 'api/problem';
import ProblemList from 'components/unit/Problem/ProblemList';
import Select from 'components/unit/Problem/Select';
import Filter from 'components/commons/Filter';

const Problem = () => {
  // const [problemList, setProblemList] = useState();

  // const fetchProblemList = async () => {
  //   const data = await getProblemList();
  //   setProblemList(data.data);
  // };

  // useEffect(() => {
  //   fetchProblemList();
  //   console.log(problemList);
  // }, []);

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
          <ProblemList />
        </Table>
      </Container>
    </>
  );
};

export default Problem;
