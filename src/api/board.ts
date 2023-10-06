import { instance } from 'api';
import { AddboardListForm, RequestNoticeList } from 'types/api';

// 게시판 리스트
export const getToggleRequestList = async ({
  query = 'notice',
  page = 0,
  size = 10,
  title = '',
  content = '',
  createdDate = '',
}): Promise<RequestNoticeList> => {
  const response = await instance.get(
    `/api/notice?page=${page}&size=${size}&title=${title}&content=${content}&createdDate=${createdDate}`,
  );
  return response.data;
};

export const addBoardList = async (formData: any): Promise<any> => {
  const response = instance.post('/api/notice', formData);
  return response;
};
