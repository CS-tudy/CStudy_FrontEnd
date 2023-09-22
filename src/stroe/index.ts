import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../hooks/@redux';
import persistedReducer from 'hooks/@redux/persistConfig';
import { persistStore } from 'redux-persist';
import problemSlice from 'hooks/@redux/problemSlice';
import MypagePwdSlice from 'hooks/@redux/mypage/MypagePwdSlice';
import registerModalSlice from 'hooks/@redux/registerModalSlice';
import loginModalSlice from 'hooks/@redux/loginModalSlice';
import MypageSlice from 'hooks/@redux/mypage/MypageSlice';

const store = configureStore({
  reducer: {
    persistedReducer,
    problem: problemSlice,
    myPagePwd: MypagePwdSlice,
    Mypage: MypageSlice,
    registerModal: registerModalSlice,
    loginModal: loginModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
