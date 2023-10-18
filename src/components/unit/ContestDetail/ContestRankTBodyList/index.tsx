import { IContestRank } from 'types/api';
import ContestRankTBodyItem from '../ContestRankTBodyItem';

interface ContestRankTBodyListProps {
  contestRank: IContestRank;
  totalQuestion: number;
}

const ContestRankTBodyList = ({
  contestRank,
  totalQuestion,
}: ContestRankTBodyListProps) => {
  return (
    <>
      {contestRank?.content?.map(rank => (
        <ContestRankTBodyItem
          key={rank.memberId}
          rank={rank}
          totalQuestion={totalQuestion}
        />
      ))}
    </>
  );
};

export default ContestRankTBodyList;
