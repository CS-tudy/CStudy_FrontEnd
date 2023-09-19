import { instance } from 'api';
import { FieldValues } from 'react-hook-form';

export const problemSet = async (formData: FieldValues) => {
  const response = await instance.post('/api/questions', formData);

  return response.data;
};
