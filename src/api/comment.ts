import { instance } from 'api';
import { AxiosResponse } from 'axios';
import { AddComment, RequestComment } from 'types/api';

// 게시판 리스트

export const getCommentList = async (
  id: string | undefined,
): Promise<RequestComment> => {
  const response = await instance.get(`/api/comment/${id}`);
  return response.data;
};

export const addCommentList = async ({
  noticeId,
  content,
}: AddComment): Promise<AxiosResponse> => {
  const response = instance.post('/api/comment', {
    noticeId,
    content,
  });
  return response;
};
