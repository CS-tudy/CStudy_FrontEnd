import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../hooks/@redux';
import persistedReducer from 'hooks/@redux/persistConfig';
import { persistStore } from 'redux-persist';
import problemSlice from 'hooks/@redux/problemSlice';
import MypagePwdSlice from 'hooks/@redux/MypagePwdSlice';

const store = configureStore({
  reducer: {
    persistedReducer,
    problem: problemSlice,
    myPagePwd: MypagePwdSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
