import { createSlice } from '@reduxjs/toolkit';
import { useGetImg } from 'hooks/mypage/useGetImg';

export interface myPageDownloadState {
  image: string;
  error: null;
  loading: boolean;
}

const initialState: myPageDownloadState = {
  image: '',
  error: null,
  loading: true,
};

const MyPageDownloadSlice = createSlice({
  name: 'myPageDownload',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(useGetImg.pending, state => {
      state.loading = false;
    });
    builder.addCase(useGetImg.fulfilled, (state, action) => {
      state.image = action.payload;
    });
    builder.addCase(useGetImg.rejected, state => {
      state.loading = true;
    });
  },
});

export default MyPageDownloadSlice.reducer;
