import { instance } from 'api';
import { Ranks } from 'types/api';

export const getRanks = async (): Promise<Ranks[]> => {
  const response = await instance.get(`/api/rank`);
  return response.data;
};
