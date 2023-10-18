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
    toggleLoginModal: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleLoginModal } = loginModalSlice.actions;
export default loginModalSlice.reducer;
