// interface ContestRankTBodyListProps {
//   ranking: ContestRankingContent;
//   totalQuestion: number;
// }

import ContestRankTBodyItem from '../ContestRankTBodyItem';

const ContestRankTBodyList = () => {
  return (
    // {contestRanking?.content?.map((ranking) => (
    // <ContestDetailRankingTBodyList key={ranking.memberId} ranking={ranking} totalQuestion={totalQuestion} />
    // ))}
    <ContestRankTBodyItem />
  );
};

export default ContestRankTBodyList;
