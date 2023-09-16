import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useCreateProblem } from 'hooks/useCreateProblem';
import store from 'stroe';

export interface problemState {
  formData: object;
  error: null;
  loading: boolean;
}

const initialState: problemState = {
  formData: {},
  error: null,
  loading: true,
};

const ProblemSlice = createSlice({
  name: 'problem',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(useCreateProblem.pending, state => {
      state.loading = false;
    });
    builder.addCase(useCreateProblem.fulfilled, (state, action) => {
      state.formData = action.payload;
    });
    builder.addCase(useCreateProblem.rejected, state => {
      state.loading = true;
    });
  },
});

export type AppDispatch = typeof store.dispatch;

export default ProblemSlice.reducer;
