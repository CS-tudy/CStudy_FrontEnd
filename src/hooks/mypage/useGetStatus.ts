import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApprovalStatus } from 'api/mypage';

export const useGetStatus = createAsyncThunk(
  'myPageStatus/useGetStatus',
  async () => {
    try {
      const data = await ApprovalStatus();
      return data;
    } catch (error) {
      alert(error);
    }
  },
);
