import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMyPage } from 'api/mypage';

export const useGetMypage = createAsyncThunk(
  'myPage/useGetMypage',
  async () => {
    try {
      const data = await getMyPage();
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
