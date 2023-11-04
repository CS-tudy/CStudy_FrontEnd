import { instance } from 'api';

export const getAlarm = async () => {
  const response = await instance.get(`/api/alarm`);
  return response;
};

export const getAlarms = async (): Promise<any> => {
  const response = await instance.get(`/api/alarm`);
  return response.data;
};

export const deleteAlarm = async (alarmId: string): Promise<any> => {
  const response = await instance.delete(`/api/alarm/${alarmId}`);
  return response;
};
