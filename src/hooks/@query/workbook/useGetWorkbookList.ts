import { useQuery } from '@tanstack/react-query';
import { getWorkbookList } from 'api/workbook';

interface UseGetWorkbookListProps {
  page?: number;
  title?: string;
  description?: string;
}

const useGetWorkbookList = ({
  page,
  title,
  description,
}: UseGetWorkbookListProps) => {
  const { data: workbookList } = useQuery(
    ['woorkbookList', { page, title, description }],
    () => getWorkbookList({ page, title, description }),
  );
  return workbookList;
};

export default useGetWorkbookList;
