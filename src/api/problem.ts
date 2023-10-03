import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { IProblem, IProblemList } from 'types/api';
import { selectAnswerProblemFromProps } from 'types/problem';

// 문제 생성하기 & 대량 문제 생성하기
export const problemSet = async (formData: FieldValues) => {
  const response = await instance.post('/api/questions', formData);

  return response.data;
};

//  전체 문제 조회 / 내가 푼 문제 조회
export const getProblemList = async ({
  questionTitle = '',
  categoryTitle = '',
  status = 0,
  memberId = 0,
  page = 0,
  size = 10,
  query = '',
}): Promise<IProblem> => {
  const response = await instance.get(
    `/api/questions${query}?${
      query === ''
        ? `questionTitle=&categoryTitle=${categoryTitle}&status=${status}&memberId=&page=${page}&size=${size}`
        : `page=${page}&size=${size}`
    }`,
  );

  return response.data;
};

export const getProblemListTest = () => {
  const response = instance.get(`/api/questions`);
  return response;
};

export const getProblemListSearch = search => {
  const response = instance.get(`/api/questions?questionTitle=${search}`);
  return response;
};

//  단일 문제 조회
export const getProblem = async (problemId: string): Promise<IProblem> => {
  const response = await instance.get(`/api/questions/${problemId}`);
  return response.data;
};

// 단일 문제 정답 선택
export const selectAnswerProblem = async ({
  problemId,
  formData,
}: selectAnswerProblemFromProps) => {
  const response = await instance.post(
    `/api/questions/${problemId}/answer`,
    formData,
  );
  return response;
};
