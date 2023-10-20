import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginInfo: {},
};

const loginfilterSlice = createSlice({
  name: 'adminLogin',
  initialState,
  reducers: {
    adminLogin: (state, action) => {
      state.loginInfo = action.payload;
    },
  },
});

export const { adminLogin } = loginfilterSlice.actions;
export default loginfilterSlice.reducer;
