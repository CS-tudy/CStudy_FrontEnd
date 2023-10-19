import { createSlice } from '@reduxjs/toolkit';
import { useGetMypage } from 'hooks/mypage/useGetMypage';
import store from 'stroe';

export interface myPageState {
  info: {
    id: number;
    name: string;
    email: string;
  };
  error: null;
  loading: boolean;
}

const initialState: myPageState = {
  info: {
    id: 0,
    name: '',
    email: '',
  },
  error: null,
  loading: true,
};

const MypageSlice = createSlice({
  name: 'myPage',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(useGetMypage.pending, state => {
      state.loading = false;
    });
    builder.addCase(useGetMypage.fulfilled, (state: any, action) => {
      state.info = action.payload;
    });
    builder.addCase(useGetMypage.rejected, state => {
      state.loading = true;
    });
  },
});

export default MypageSlice.reducer;
