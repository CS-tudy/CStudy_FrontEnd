import { RequestNoticeList } from 'types/api';
import AdminNoticeListCard from './adminNoticeListCard';

interface AdminNoticeListProps {
  adminnoticeList: RequestNoticeList;
}

const AdminNoticeList = ({ adminnoticeList }: AdminNoticeListProps) => {
  console.log(adminnoticeList);

  return (
    <>
      {adminnoticeList?.content?.map(({ id, title, content, createdDate }) => (
        <AdminNoticeListCard
          key={id}
          id={id}
          title={title}
          content={content}
          createdDate={createdDate}
        />
      ))}
    </>
  );
};

export default AdminNoticeList;
