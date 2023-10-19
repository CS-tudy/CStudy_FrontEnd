import { useQuery } from '@tanstack/react-query';
import { getWorkbookimage } from 'api/workbook';

const useGetWorkbookImg = () => {
  const { data: workbookImgList } = useQuery(['workbookimgList'], () =>
    getWorkbookimage(),
  );
  return workbookImgList;
};

export default useGetWorkbookImg;
