import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { Problem, ProblemList } from 'types/api';
import { selectAnswerProblemFromProps } from 'types/problem';

// 문제 생성하기 & 대량 문제 생성하기
export const problemSet = async (formData: FieldValues) => {
  const response = await instance.post('/api/questions', formData);

  return response.data;
};

//  전체 문제 조회 / 내가 푼 문제 조회
export const getProblemList = () => {
  const response = instance.get(`/api/questions`);
  return response;
};

//  단일 문제 조회
export const getProblem = async (problemId: string): Promise<Problem> => {
  const response = await instance.get(`/api/question/${problemId}`);
  return response.data;
};

// 단일 문제 정답 선택
export const selectAnswerProblem = async ({
  problemId,
  formData,
}: selectAnswerProblemFromProps) => {
  const response = await instance.post(`/api/question/${problemId}`, formData);
  return response;
};
