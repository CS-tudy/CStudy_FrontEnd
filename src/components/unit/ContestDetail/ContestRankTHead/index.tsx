import * as S from './style';

const ContestRankTHead = () => {
  const columns = [
    { field: 'name', headerName: '이름' },
    { field: 'score', headerName: '점수(맞은 개수/총개수)' },
    { field: 'endTime', headerName: '끝난 시간' },
  ];

  return (
    <S.StyledThead>
      <S.StyledTr>
        {columns?.map(column => (
          <S.StyledTh key={column.field}>{column.headerName}</S.StyledTh>
        ))}
      </S.StyledTr>
    </S.StyledThead>
  );
};

export default ContestRankTHead;
