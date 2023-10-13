import Table from 'components/commons/Table';
import { TBodyTd, TBodyTh } from 'components/commons/Table/style';
import Table2 from 'components/commons/Table2';
import { RiTable2 } from 'react-icons/ri';

const ContestInfo = () => {
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
      <h2>대회정보</h2>
      <Table2 maxHeight colRate={tableColRate} title={tableTitle}>
        <tr>
          <TBodyTd>
            {/* {contest?.startTime} */}
            2023-05-15
          </TBodyTd>
          <TBodyTd>
            {/* {contest?.endTime} */}
            2024-05-14
          </TBodyTd>
        </tr>
        <tr>
          <TBodyTh>최대인원수</TBodyTh>
          <TBodyTh>현재 참가자수</TBodyTh>
        </tr>
        <tr>
          <TBodyTd>
            {/* {contest?.maxParticipants} */}
            100
          </TBodyTd>
          <TBodyTd>{/* {contest?.participants} */}1</TBodyTd>
        </tr>
      </Table2>
    </div>
  );
};

export default ContestInfo;
