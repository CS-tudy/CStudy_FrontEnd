import Table from 'components/commons/Table';
import { TBodyTd, TBodyTh } from 'components/commons/Table/style';

const ContestInfoTable = () => {
  const tableColRate = () => ['50%', '50%'];
  const tableTitle = () => ['대회 시작일', '대회 종료일'];
  return (
    // <Table maxHeight colRate={tableColRate} title={tableTitle}>
    //   <tr>
    //     <TBodyTd>
    //       {/* {contest?.startTime} */}
    //       대회 시작일
    //     </TBodyTd>
    //     <TBodyTd>
    //       {/* {contest?.endTime} */}
    //       대회 종료일
    //     </TBodyTd>
    //   </tr>
    //   <tr>
    //     <TBodyTh>최대인원수</TBodyTh>
    //     <TBodyTh>현재 참가자수</TBodyTh>
    //   </tr>
    //   <tr>
    //     <TBodyTd>
    //       {/* {contest?.maxParticipants} */}
    //       최대 인원수
    //     </TBodyTd>
    //     <TBodyTd>
    //       {/* {contest?.participants} */}
    //       현재 참가자수
    //     </TBodyTd>
    //   </tr>
    // </Table>
    <div></div>
  );
};

export default ContestInfoTable;
