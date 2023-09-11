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
    toggleRegisterModal(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleRegisterModal } = registerModalSlice.actions;
export default registerModalSlice.reducer;
