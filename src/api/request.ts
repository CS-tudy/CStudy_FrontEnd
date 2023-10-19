import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { RequestDetail, ToggleRequestList } from 'types/api';

// 단일 게시판 글 조회
export const getRequest = async (
  id: string | undefined,
): Promise<RequestDetail> => {
  const response = await instance.get(`/api/request/${id}`);
  return response.data;
};

// 게시판 전체 리스트 / 내가 요청한 문제 조회
export const getToggleRequestList = async ({
  query = 'requests',
  page = 0,
  size = 10,
  sort = '',
}): Promise<ToggleRequestList> => {
  const response = await instance.get(
    `/api/request/${query}?page=${page}&size=${size}&$sort=${sort}`,
  );
  return response.data;
};

export const getRequestList = ({
  target = 'requests',
  page = 0,
  size = 10,
  sort = '',
}) => {
  const response = instance.get(
    `/api/request/${target}?page=${page}&size=${size}&$sort=${sort}`,
  );
  return response;
};

export const getRequestListAsync = async ({
  page = 0,
  size = 10,
  sort = '',
}): Promise<ToggleRequestList> => {
  const response = await instance.get(
    `/api/request/requests?page=${page}&size=${size}&$sort=${sort}`,
  );
  return response.data;
};

// 내가 요청한 문제 조회
export const getMyRequestList = ({ page = 0, size = 10, sort = '' }) => {
  const response = instance.get(
    `/api/request/member?page=${page}&size=${size}&sort=${sort}`,
  );
  return response;
};

export const getMyRequestListAsync = async ({
  page = 0,
  size = 10,
  sort = '',
}): Promise<ToggleRequestList> => {
  const response = await instance.get(
    `/api/request/member?page=${page}&size=${size}&$sort=${sort}`,
  );
  return response.data;
};

// 게시판 문제 요청글 생성
export const createRequest = (RequestForm: FieldValues) => {
  const response = instance.post('/api/request', RequestForm);
  return response;
};

// 게시글 상태(승인/대기) 수정
export const approveRequest = (RequestForm: FieldValues) => {
  const response = instance.put('/api/request/approve', RequestForm);
  return response;
};

// 게시글 수정
export const editRequest = (RequestForm: FieldValues) => {
  const response = instance.patch('/api/request', RequestForm);
  return response;
};

// 게시글 삭제
export const deleteRequest = async (
  id: string | undefined,
): Promise<RequestDetail> => {
  const response = await instance.delete(`/api/request/${id}`);
  return response.data;
};
