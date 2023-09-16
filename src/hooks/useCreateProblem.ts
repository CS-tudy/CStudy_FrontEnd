import { createAsyncThunk } from '@reduxjs/toolkit';
import { problemSet } from 'api/problem';
import { FieldValues } from 'react-hook-form';

export const useCreateProblem = createAsyncThunk(
  'problem/useCreateProblem',
  async (formData: FieldValues, thunkAPI) => {
    try {
      const data = await problemSet(formData);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      // return thunkAPI.rejectWithValue(error);
    }
  },
);
