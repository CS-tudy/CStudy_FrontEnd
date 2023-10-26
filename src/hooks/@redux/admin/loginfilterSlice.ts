import { createSlice } from '@reduxjs/toolkit';
import Toast from 'libs/Toast';

interface loginfilterProps {
  loginInfo?: void | undefined;
}

const initialState: loginfilterProps = {
  loginInfo: Toast.error('접근할수 없는 페이지입니다.'),
};

const loginfilterSlice = createSlice({
  name: 'adminLogin',
  initialState,
  reducers: {},
});

export default loginfilterSlice.reducer;
