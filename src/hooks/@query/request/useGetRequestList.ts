import { useQuery } from '@tanstack/react-query';
import {
  getMyRequestList,
  getRequestList,
  getToggleRequestList,
} from 'api/request';

interface GetRequestList {
  target?: string;
  page: number;
  sort?: string;
}

export const useGetToggleRequestList = ({
  target,
  page,
  sort,
}: GetRequestList) => {
  const { data: requestList } = useQuery(
    ['requestList', { target, page, sort }],
    () => getToggleRequestList({ target, page, sort }),
    { keepPreviousData: true },
  );
  return requestList;
};

// 전체 요청리스트 조회
export const useGetRequestList = ({ page, sort }: GetRequestList) => {
  const { data: requestList } = useQuery(
    ['requestList', { page, sort }],
    () => getRequestList({ page, sort }),
    { keepPreviousData: true },
  );
  return requestList;
};

// 내 요청리스트 조회
export const useGetMyRequestList = ({ page, sort }: GetRequestList) => {
  const { data: requestList } = useQuery(
    ['requestList', { page, sort }],
    () => getMyRequestList({ page, sort }),
    { keepPreviousData: true },
  );
  return requestList;
};
