import { createSlice } from '@reduxjs/toolkit';

interface RegisterModalState {
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
