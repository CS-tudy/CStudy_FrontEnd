import { createAsyncThunk } from '@reduxjs/toolkit';
import { problemSet } from 'api/problem';
import { FieldValues } from 'react-hook-form';

export const useCreateProblem = createAsyncThunk(
  'problem/useCreateProblem',
  async (formData: FieldValues, thunkAPI) => {
    try {
      const data = await problemSet(formData);
      alert('문제생성이 완료되었습니다');
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert('문제생성이 실패했습니다');
      return thunkAPI.rejectWithValue(error);
    }
  },
);
