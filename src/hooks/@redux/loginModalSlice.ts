import { createSlice } from '@reduxjs/toolkit';

interface LoginModalState {
  isOpen: boolean;
}

const initialState: LoginModalState = {
  isOpen: false,
};

const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    Logintoggle: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { Logintoggle } = loginModalSlice.actions;
export default loginModalSlice.reducer;
