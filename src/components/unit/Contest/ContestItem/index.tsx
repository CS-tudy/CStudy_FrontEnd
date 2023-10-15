import StyleLink from 'components/commons/StyleLink';
import { TBodyTd } from 'components/commons/Table/style';
import { ContestInfo } from 'types/api';

interface ContestItemProps {
  contestItem: ContestInfo;
}

const ContestItem = ({ contestItem }: ContestItemProps) => {
  const { id, title, participants, startTime, endTime } = contestItem;
  console.log('item', contestItem);
  return (
    <tr>
      <TBodyTd>
        <StyleLink to="1">{title}</StyleLink>
      </TBodyTd>
      <TBodyTd>{participants}</TBodyTd>
      <TBodyTd>
        {startTime} ~ {endTime}
      </TBodyTd>
    </tr>
  );
};

export default ContestItem;
