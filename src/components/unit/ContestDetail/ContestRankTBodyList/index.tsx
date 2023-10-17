import { IContestRank } from 'types/api';
import ContestRankTBodyItem from '../ContestRankTBodyItem';

interface ContestRankTBodyListProps {
  contestRanking: IContestRank;
  // totalQuestion: number;
}

const ContestRankTBodyList = ({ contestRank }: ContestRankTBodyListProps) => {
  return (
    <>
      {contestRank?.content?.map(rank => (
        <ContestRankTBodyItem
          key={rank.memberId}
          rank={rank}
          // totalQuestion={totalQuestion}
        />
      ))}
    </>
  );
};

export default ContestRankTBodyList;
