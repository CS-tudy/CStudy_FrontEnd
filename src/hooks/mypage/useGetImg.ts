import { createAsyncThunk } from '@reduxjs/toolkit';
import { ImgDownload } from 'api/mypage';

export const useGetImg = createAsyncThunk('myPage/useGetImg', async () => {
  try {
    const data = await ImgDownload();
    const url = URL.createObjectURL(data);
    return url;
  } catch (error) {
    // 오류 처리
    console.log(error);
    throw new Error('파일 다운로드 중 오류 발생');
  }
});
