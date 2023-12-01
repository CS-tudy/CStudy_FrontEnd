import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../hooks/@redux';
import registerModalSlice from 'hooks/@redux/registerModalSlice';
import loginModalSlice from 'hooks/@redux/loginModalSlice';

const store = configureStore({
  reducer: {
    rootReducer,
    registerModal: registerModalSlice,
    loginModal: loginModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
