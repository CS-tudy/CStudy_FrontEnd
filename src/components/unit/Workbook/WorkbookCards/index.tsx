import { memo } from 'react';
import { WorkbookList } from 'types/api';
import WorkBookCard from '../WorkbookCard';
import * as Styled from './style';

interface WorkbookCardsProps {
  workbookList: WorkbookList;
}

const WorkbookCards = ({ workbookList }: WorkbookCardsProps) => {
  return (
    <Styled.WorkBookCards>
      {workbookList?.content?.map(
        ({ id, title, description, createdAt, fileName }) => (
          <WorkBookCard
            key={id}
            id={id}
            title={title}
            description={description}
            createdAt={createdAt}
            fileName={fileName}
          />
        ),
      )}
    </Styled.WorkBookCards>
  );
};

export default memo(WorkbookCards);
