import { createSlice } from '@reduxjs/toolkit';

export interface RegisterModalState {
  isOpen: boolean;
}

const initialState: RegisterModalState = {
  isOpen: false,
};

const registerModalSlice = createSlice({
  name: 'registerModal',
  initialState,
  reducers: {
    signupToggle: (state: any) => {
      state.isOpen = !state.isOpen;
    },
    signupClose: (state: any) => {
      state.isOpen = false;
    },
  },
});

export const { signupToggle, signupClose } = registerModalSlice.actions;
export default registerModalSlice.reducer;
