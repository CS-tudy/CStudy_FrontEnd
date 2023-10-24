import { ContestInfo } from 'types/api';
import ContestItem from '../ContestItem';
import { ContestFilterStoreType } from 'hooks/@redux/filterSlice';

interface ContestListProps {
  contestList: ContestInfo[];
  contestFilter: ContestFilterStoreType;
  isActive: string;
  totalPages: number;
  // checkAndDisplayLoginModal: (e: React.MouseEvent) => void;
  handlePage: (page: number) => void;
}

const ContestList = (props: ContestListProps) => {
  const { contestList, contestFilter, isActive, totalPages, handlePage } =
    props;
  return (
    <>
      {contestList?.map(contestItem => (
        <ContestItem key={contestItem.id} contestItem={contestItem} />
      ))}
    </>
  );
};

export default ContestList;
