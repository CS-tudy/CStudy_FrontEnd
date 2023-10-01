import { createAsyncThunk } from '@reduxjs/toolkit';
import { ImgUpload } from 'api/mypage';
import { FieldValues } from 'react-hook-form';

export const useUploadImg = createAsyncThunk(
  'myPage/useUploadImg',
  async (formData: FieldValues) => {
    try {
      const data = await ImgUpload(formData);

      return data;
    } catch (error) {
      // 오류 처리
      console.log(error);
      throw new Error('파일 업로드 중 오류 발생');
    }
  },
);
