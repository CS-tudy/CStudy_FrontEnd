import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import {
  Contest,
  ContestList,
  ContestMyRank,
  ContestProblem,
  IContestRank,
  IContestResult,
} from 'types/api';

// -------- Get 요청 -------- //

// 대회 정보
export const getContest = async (competitionId: string): Promise<Contest> => {
  const response = await instance.get(`/api/competitions/${competitionId}`);
  return response.data;
};

// 대회 문제 조회
export const getContestProblem = async (
  competitionId: string,
): Promise<ContestProblem[]> => {
  const response = await instance.get(
    `/api/competitions/${competitionId}/questions`,
  );
  return response.data;
};


// 참여 가능 대회 리스트 + 종료된 대회 리스트
export const getContestList = async ({
  page = 0,
  size = 10,
  query = 'active',
}): Promise<ContestList> => {
  const response = await instance.get(
    `/api/competitions/${query}?page=${page}&size=${size}&sort=`,
  );
  return response.data;
};

// 대회 랭킹
export const getContestRanking = async ({
  contestId = '',
  page = 0,
  size = 10,
  sort = '',
}): Promise<IContestRank> => {
  const response = await instance.get(
    `/api/competitions/${contestId}/ranks?page=${page}&size=${size}&sort=`,
  );
  return response.data;
};

// 대회 나의 랭킹
export const getContestMyRanking = async (
  contestId: string,
): Promise<ContestMyRank> => {
  const response = await instance.get(
    `/api/competitions/${contestId}/member/rank`,
  );
  return response.data;
};

// 대회 점수 조회
export const getContestResult = async (
  contestId: string,
): Promise<IContestResult> => {
  const response = await instance.get(`/api/competitions/scores/${contestId}`);
  return response.data;
};

// -------- POST 요청 -------- //

// 대회 생성하기
export const contestSet = async (formData: FieldValues) => {
  const response = await instance.post('/api/competitions', formData);
  return response;
};

// 대회 참여하기
export const joinContest = (competitionId: number | string) => {
  const response = instance.post(`/api/competitions/${competitionId}/join`);
  return response;
};

// 대회 답안 제출
export const submitContest = (ContestAnswerForm: FieldValues) => {
  const response = instance.post(
    '/api/competitions/scores/submit',
    ContestAnswerForm,
  );
  return response;
};

// 대회 문제 추가
export const addContestProblem = (AddContestProblemForm: FieldValues) => {
  const { competitionId, questionIds } = AddContestProblemForm;
  const response = instance.post('/api/competitions/questions', {
    competitionId,
    questionIds,
  });
  return response;
};

// 대회 문제 삭제
export const deleteContestProblem = (DeleteContestProblemForm: FieldValues) => {
  const { competitionId, questionIds } = DeleteContestProblemForm;
  const response = instance.delete('/api/competitions/questions', {
    data: {
      competitionId,
      questionIds,
    },
  });
  return response;
};
