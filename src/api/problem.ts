/* -------- POST 요청 -------- */
import { instance } from 'api';
import { FieldValues } from 'react-hook-form';

// 문제 생성하기 & 대량 문제 생성하기
export const problemSet = async (formData: FieldValues) => {
  const response = await instance.post(
    '/api/questions',
    { formData },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};
