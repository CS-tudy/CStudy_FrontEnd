import { useQuery } from '@tanstack/react-query';
import { getToggleRequestList } from 'api/board';

interface GetRequestList {
  page: number;
  query: string;
  title: string;
  content: string;
}

const useGetNoticeList = ({ page, query, title, content }: GetRequestList) => {
  const { data: requestList } = useQuery(
    ['noticeList', { page, query, title, content }],
    () => getToggleRequestList({ page, query, title, content }),
    { keepPreviousData: true },
  );
  return requestList;
};

export default useGetNoticeList;
