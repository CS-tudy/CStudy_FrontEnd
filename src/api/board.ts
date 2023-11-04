import { instance } from 'api';
import {
  RequestNoticeDetail,
  RequestNoticeList,
  ToggleRequestList,
} from 'types/api';
interface AdminNoticeProps {
  id: number;
  formData: {
    title: string;
    content: string;
  };
}

export const getAdminRequestList = async ({
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

export const getToggleRequestList = async ({
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

export const deleteNoticeList = async (id: number) => {
  const response = instance.delete(`/api/notice/${id}`);
  return response;
};

export const updateNoticeList = async ({ id, formData }: AdminNoticeProps) => {
  const response = instance.patch(`/api/notice/${id}`, formData);
  return response;
};

export const getNoticeDetail = async (
  id: string | undefined,
): Promise<RequestNoticeDetail> => {
  const response = await instance.get(`/api/notice/${id}`);
  return response.data;
};
