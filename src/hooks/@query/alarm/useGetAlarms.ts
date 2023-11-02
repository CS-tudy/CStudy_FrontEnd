import { useQuery } from '@tanstack/react-query';
import { getAlarms } from 'api/alarm';

export const useGetAlarms = () => {
  const { data: alarms } = useQuery(['alarms'], getAlarms);

  return alarms;
};
