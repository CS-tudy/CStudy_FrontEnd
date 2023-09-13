/* -------- POST 요청 -------- */
import { instance } from 'api';
import { FieldValues } from 'react-hook-form';

// 문제 생성하기 & 대량 문제 생성하기
export const problemSet = async (formData: FieldValues) => {
  if (formData.length === 1) {
    const response = await instance.post('/api/question', formData[0]);
    return response.data;
  }

  if (formData.length > 1) {
    const response = await instance.post('/api/questions', formData);
    return response.data;
  }

  throw new Error('문제 생성에 실패했습니다.');
};
