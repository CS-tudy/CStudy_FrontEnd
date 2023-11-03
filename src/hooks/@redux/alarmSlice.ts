import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alarms: [],
};

const alarmSlice = createSlice({
  name: 'alarms',
  initialState: initialState,
  reducers: {
    setAlarms: (state, action) => {
      state.alarms = action.payload;
    },
  },
});
// const alarmSlice = createSlice({
//   name: 'alarms',
//   initialState: null,
//   reducers: {
//     setAlarms: (state: any, action) => {
//       state = action.payload;
//     },
//   },
// });

export const { setAlarms } = alarmSlice.actions;
const alarmReducer = alarmSlice.reducer;
export default alarmReducer;
