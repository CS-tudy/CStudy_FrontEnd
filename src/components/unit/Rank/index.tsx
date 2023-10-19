import Table from 'components/commons/Table';
import { TBodyTd } from 'components/commons/Table/style';
import { useGetRanks } from 'hooks/@query/rank/useGetRanks';
import rank1 from 'assets/rank/1rank.png';
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
    ({ score, value }, index: number) => (
      <tr key={index}>
        <TBodyTd className="white" white narrow rank={index + 1}>
          {index + 1 === 1 ? (
            <PiMedalFill size="28" color="#f7d100" />
          ) : index + 1 === 2 ? (
            <PiMedalFill size="28" color="silver" />
          ) : // <MdStars size="30" color="silver" />
          index + 1 === 3 ? (
            <PiMedalFill size="28" color="#ba9964" />
          ) : (
            ''
          )}
        </TBodyTd>
        <TBodyTd className="white" white narrow rankFont={index + 1}>
          {index + 1 !== 1 ? (
            index + 1
          ) : (
            <div>
              <img src={rank1} width={55} />
            </div>
          )}
        </TBodyTd>
        <TBodyTd className="title center white" white narrow>
          {value}
        </TBodyTd>
        <TBodyTd className="white" white narrow>
          {Math.floor(score as number)}
        </TBodyTd>
      </tr>
    ),
  );
  return (
    <Table
      narrow
      colRate={['10%', '5%', '65%', '20%']}
      title={['', '순위', '닉네임', '점수']}
    >
      {TBodyContent}
    </Table>
  );
};

export default Rank;
