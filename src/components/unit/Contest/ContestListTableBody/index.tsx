import { ContestInfo } from 'types/api';
import ContestItem from '../ContestItem';

interface ContestListProps {
  contestList: ContestInfo[];
}

const ContestList = (props: ContestListProps) => {
  const { contestList } = props;
  return (
    <>
      {contestList?.map(contestItem => (
        <ContestItem key={contestItem.id} contestItem={contestItem} />
      ))}
    </>
  );
};

export default ContestList;
