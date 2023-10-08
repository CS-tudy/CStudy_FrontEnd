import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { WorkbookSetForm } from 'types/Form';

/* -------- Get 요청 -------- */

// 문제집리스트

/* -------- POST 요청 -------- */

// 문제집 생성
export const workbookSet = async (formData: WorkbookSetForm) => {
  const response = await instance.post('/api/workbook', formData);
  return response;
};

export const updateWorkbook = async (formData: FieldValues) => {
  const response = await instance.post(`/api/workbook/update`, formData);
  return response;
};
