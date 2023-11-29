import Table from 'components/commons/Table';
import { TBodyTd } from 'components/commons/Table/style';
import { useGetRanks } from 'hooks/@query/rank/useGetRanks';
import { PiMedalFill } from 'react-icons/pi';

const Rank = () => {
  const membersRanks = useGetRanks();

  if (Array.isArray(membersRanks)) {
    const emptyDataCount = Math.max(0, 10 - (membersRanks?.length as number));

    for (let i = 0; i < emptyDataCount; i++) {
      membersRanks?.push({ value: null, score: null });
    }
  }

  const TBodyContent = (Array.isArray(membersRanks) ? membersRanks : [])?.map(
    ({ score, value }, index: number) =>
      value !== null ? (
        <tr key={index}>
          <TBodyTd className="white" $white narrow rank={index + 1}>
            {index + 1 === 1 ? (
              <PiMedalFill size="28" color="#f7d100" />
            ) : index + 1 === 2 ? (
              <PiMedalFill size="28" color="silver" />
            ) : index + 1 === 3 ? (
              <PiMedalFill size="28" color="#ba9964" />
            ) : (
              ''
            )}
          </TBodyTd>
          <TBodyTd className="white" $white narrow rankFont={index + 1}>
            {index + 1 === 1 ? (
              <div
                style={{ fontSize: '30px', color: '#000', fontWeight: '700' }}
              >
                {index + 1}
              </div>
            ) : index + 1 === 2 ? (
              <div
                style={{ fontSize: '30px', color: '#000', fontWeight: '700' }}
              >
                {index + 1}
              </div>
            ) : index + 1 === 3 ? (
              <div
                style={{ fontSize: '30px', color: '#000', fontWeight: '700' }}
              >
                {index + 1}
              </div>
            ) : (
              index + 1
            )}
          </TBodyTd>
          <TBodyTd className="title center white" $white narrow>
            {value}
          </TBodyTd>
          <TBodyTd className="white" $white narrow>
            {Math.floor(score as number)}
          </TBodyTd>
        </tr>
      ) : (
        <div></div>
      ),
  );
  return (
    <Table
      narrow
      colRate={['9%', '13%', '65%', '13%']}
      title={['', '순위', '닉네임', '점수']}
    >
      {TBodyContent}
    </Table>
  );
};

export default Rank;
