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
    toggle: (state: any) => {
      state.isOpen = !state.isOpen;
    },
    close: (state: any) => {
      state.isOpen = false;
    },
  },
});

export const { toggle, close } = registerModalSlice.actions;
export default registerModalSlice.reducer;
