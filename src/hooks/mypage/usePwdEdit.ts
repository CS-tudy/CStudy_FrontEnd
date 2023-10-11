import { createAsyncThunk } from '@reduxjs/toolkit';
import { PwdEdit } from 'api/mypage';
import { FieldValues } from 'react-hook-form';

export const usePwdEdit = createAsyncThunk(
  'myPagePwd/usePwdEdit',
  async (formData: FieldValues, thunkAPI) => {
    try {
      const data = await PwdEdit(formData);
      alert('비밀번호가 변경되었습니다.');

      return thunkAPI.fulfillWithValue(data);
    } catch (error: any) {
      if (error.data.code === '1002') {
        alert(error.data.message);
      }
    }
  },
);
