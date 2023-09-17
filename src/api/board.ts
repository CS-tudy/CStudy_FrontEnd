import { instance } from 'api';
import { ApiResponse } from 'types/api';

// 게시판 리스트
export const getToggleRequestList = async ({
  page = 0,
  size = 10,
  title = '',
  content = '',
  createdDate = '',
}): Promise<ApiResponse> => {
  const response = await instance.get(
    `/api/notice?page=${page}&size=${size}&title=${title}&content=${content}&createdDate=${createdDate}`,
  );
  return response.data;
};
