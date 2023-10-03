import { createAsyncThunk } from '@reduxjs/toolkit';
import { ImgDownload } from 'api/mypage';

export const useGetImg = createAsyncThunk(
  'myPageDownload/useGetImg',
  async () => {
    try {
      const data = await ImgDownload();
      const url = URL.createObjectURL(data);
      return url;
    } catch (error) {
      throw new Error('파일 다운로드 중 오류 발생');
    }
  },
);
