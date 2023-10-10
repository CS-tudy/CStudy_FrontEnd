import { instance } from 'api';
import { AxiosResponse } from 'axios';
import { RequestComment } from 'types/api';

// 게시판 리스트

export const getCommentList = async (
  id: string | undefined,
): Promise<RequestComment> => {
  const response = await instance.get(`/api/comment/${id}`);
  return response.data;
};

export const addCommentList = async ({
  formData,
}: any): Promise<AxiosResponse> => {
  const response = instance.post('/api/comment', formData);
  return response;
};

export const deleteCommentList = async ({
  commentId,
}: any): Promise<AxiosResponse> => {
  const response = instance.delete(`/api/comment/${commentId}`);
  return response;
};
