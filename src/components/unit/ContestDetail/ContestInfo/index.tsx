import Table from 'components/commons/Table';
import { TBodyTd, TBodyTh } from 'components/commons/Table/style';
import Table2 from 'components/commons/Table2';
import { Contest } from 'types/api';
import * as S from './style';

interface ContestInfoProps {
  contest: Contest;
}

const ContestInfo = ({ contest }: ContestInfoProps) => {
  const tableColRate = ['50%', '50%'];
  const tableTitle = ['대회 시작일', '대회 종료일'];
  return (
    <div
      style={{
        width: '100%',
        // background: '#fff',
        // border: '1px solid #ddd',
        // padding: '10px',
      }}
    >
      <S.Title>정보</S.Title>
      <Table2 maxHeight narrow={true} colRate={tableColRate} title={tableTitle}>
        <tr>
          <TBodyTd>{contest?.startTime}</TBodyTd>
          <TBodyTd>{contest?.endTime}</TBodyTd>
        </tr>
        <tr>
          <TBodyTh>최대인원수</TBodyTh>
          <TBodyTh>현재 참가자수</TBodyTh>
        </tr>
        <tr>
          <TBodyTd>{contest?.maxParticipants}</TBodyTd>
          <TBodyTd>{contest?.participants}</TBodyTd>
        </tr>
      </Table2>
    </div>
  );
};

export default ContestInfo;
