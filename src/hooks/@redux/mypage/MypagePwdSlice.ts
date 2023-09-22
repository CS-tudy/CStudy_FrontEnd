import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usePwdEdit } from 'hooks/mypage/usePwdEdit';
import store from 'stroe';

export interface myPagePwdState {
  formData: object;
  error: null;
  loading: boolean;
}

const initialState: myPagePwdState = {
  formData: {},
  error: null,
  loading: true,
};

const MypagePwdSlice = createSlice({
  name: 'myPagePwd',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(usePwdEdit.pending, state => {
      state.loading = false;
    });
    builder.addCase(usePwdEdit.fulfilled, (state, action) => {
      state.formData = action.payload;
    });
    builder.addCase(usePwdEdit.rejected, state => {
      state.loading = true;
    });
  },
});

export default MypagePwdSlice.reducer;
