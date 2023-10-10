import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { WorkbookSetForm } from 'types/Form';
import { Workbook, WorkbookList, WorkbookQuestion } from 'types/api';

// 문제집 생성
export const workbookSet = async (formData: WorkbookSetForm) => {
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
  size = 10,
  sort = '',
): Promise<WorkbookQuestion> => {
  const response = await instance.get(
    `/api/workbook/${id}/questions?page=${page}&size=${size}&sort=${sort}`,
  );
  return response.data;
};

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
  const response = await instance.post(
    `/api/workbook/question/delete`,
    formData,
  );
  return response;
};

export const addWorkbookQuestion = async (formData: FieldValues) => {
  const response = await instance.post(`/api/workbook/question/add`, formData);
  return response;
};
