import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { WorkbookSetForm } from 'types/Form';
import { Workbook, WorkbookList, WorkbookQuestion } from 'types/api';

// 문제집 생성
export const workbookSet = async (formData: WorkbookSetForm): Promise<any> => {
  const response = await instance.post('/api/workbook', formData);
  return response;
};

// 문제집 정보 요청
export const getWorkbook = async (id: string): Promise<Workbook> => {
  const response = await instance.get(`/api/workbook/${id}`);
  return response.data;
};

export const getWorkbookQuestion = async (
  id = '',
  page = 0,
  size = 5,
  sort = '',
): Promise<WorkbookQuestion> => {
  const response = await instance.get(
    `/api/workbook/${id}/questions?page=${page}&size=${size}&sort=${sort}`,
  );
  return response.data;
};

// 문제집 리스트
export const getWorkbookList = async ({
  page = 0,
  size = 8,
  title = '',
  sort = '',
  description = '',
}): Promise<WorkbookList> => {
  const response = await instance.get(
    `/api/workbook?page=${page}&size=${size}&sort=${sort}&title=${title}&description=${description}`,
  );
  return response.data;
};

export const updateWorkbook = async (formData: FieldValues) => {
  const response = await instance.post(`/api/workbook/update`, formData);
  return response;
};

export const workbookQuestionDelete = async (formData: FieldValues) => {
  const { workbookId, questionIds } = formData;
  const response = await instance.delete(`/api/workbook`, {
    data: {
      workbookId,
      questionIds,
    },
  });
  return response;
};

export const addWorkbookQuestion = async (formData: FieldValues) => {
  const response = await instance.post(
    `/api/workbook/workbook/questions`,
    formData,
  );
  return response;
};

export const uploadimageWorkbook = async ({ id, formData }: any) => {
  const response = await instance.post(`/api/workbook/upload/${id}`, formData);
  return response;
};

export const getWorkbookimage = async () => {
  const response = await instance.get(`/api/workbook/images`);
  return response;
};
