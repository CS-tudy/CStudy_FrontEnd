import { createSlice } from '@reduxjs/toolkit';
import { useUploadImg } from 'hooks/mypage/useUploadImg';

export interface myPageUploadState {
  formData: object;
  error: null;
  loading: boolean;
}

const initialState: myPageUploadState = {
  formData: {},
  error: null,
  loading: true,
};

const MypageUpoladSlice = createSlice({
  name: 'myPageUpload',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(useUploadImg.pending, state => {
      state.loading = false;
    });
    builder.addCase(useUploadImg.fulfilled, (state, action) => {
      state.formData = action.payload;
    });
    builder.addCase(useUploadImg.rejected, state => {
      state.loading = true;
    });
  },
});

export default MypageUpoladSlice.reducer;
