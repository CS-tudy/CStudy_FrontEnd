import { getAdminRequestList } from 'api/board';
import { getCommentList } from '../../../api/comment';
import { useQuery } from '@tanstack/react-query';

interface GetRequestList {
  page: number;
  title: string;
  content: string;
}

const useGetAdminNoticeList = ({ page, title, content }: GetRequestList) => {
  const { data: request } = useQuery(
    ['noticeList', { page, title, content }],
    () => getAdminRequestList({ page, title, content }),
  );
  return request;
};

export default useGetAdminNoticeList;
