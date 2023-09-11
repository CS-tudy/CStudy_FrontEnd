import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
// import { RequestDetail, ToggleRequestList } from 'types/api';

/* -------- Get 요청 -------- */

// 게시판 글 조회
// export const getRequest = async (
//   id: string | undefined,
// ): Promise<RequestDetail> => {
//   const response = await instance.get(`/api/request/${id}`);
//   return response.data;
// };

// 게시판 전체 리스트 / 내가 요청한 문제 조회
// export const getToggleRequestList = async ({
//   page = 0,
//   size = 10,
//   query = 'list',
// }): Promise<ToggleRequestList> => {
//   const response = await instance.get(
//     `/api/request/${query}?page=${page}&size=${size}`,
//   );
//   return response.data;
// };

/* -------- POST 요청 -------- */

// 게시판 문제 요청글 생성
export const createRequest = (RequestForm: FieldValues) => {
  const response = instance.post('/api/request', RequestForm);
  return response;
};

// 게시글 상태 수정
export const approveRequest = (RequestForm: FieldValues) => {
  const response = instance.post('/api/request/approve', RequestForm);
  return response;
};
