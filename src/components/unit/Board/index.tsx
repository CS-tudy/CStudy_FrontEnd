import { Link } from 'react-router-dom';
import * as S from './style';
import { RequestNoticeList } from 'types/api';
import NoticeListCard from './NoticeListCard';

interface NoticeListProps {
  noticeList: RequestNoticeList;
}

const NoticeList = ({ noticeList }: NoticeListProps) => {
  return (
    <S.NoticeCards>
      {noticeList?.content?.map(({ id, title, content, createdDate }) => (
        <NoticeListCard
          key={id}
          id={id}
          title={title}
          content={content}
          createdDate={createdDate}
        />
      ))}
    </S.NoticeCards>
  );
};

export default NoticeList;
