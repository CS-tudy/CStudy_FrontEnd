import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApprovalStatus } from 'api/mypage';

export const useGetStatus = createAsyncThunk(
  'myPagePwd/useGetStatus',
  async () => {
    try {
      return await ApprovalStatus();
    } catch (error) {
      alert(error);
    }
  },
);
