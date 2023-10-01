import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../hooks/@redux';
import persistedReducer from 'hooks/@redux/persistConfig';
import { persistStore } from 'redux-persist';
import problemSlice from 'hooks/@redux/problemSlice';
import MypagePwdSlice from 'hooks/@redux/mypage/MypagePwdSlice';
import MypageSlice from 'hooks/@redux/mypage/MypageSlice';
import authSlice from 'hooks/@redux/authSlice';
import loginModalSlice from 'hooks/@redux/loginModalSlice';
import MypageStatusSlice from 'hooks/@redux/mypage/MypageStatusSlice';
import MypageUploadSlice from 'hooks/@redux/mypage/MypageUploadSlice';
import MyPageDownloadSlice from 'hooks/@redux/mypage/MypageDownloadSlice';

const store = configureStore({
  reducer: {
    persistedReducer,
    problem: problemSlice,
    myPagePwd: MypagePwdSlice,
    Mypage: MypageSlice,
    MypageStatus: MypageStatusSlice,
    MyPageUpload: MypageUploadSlice,
    MyPageDownload: MyPageDownloadSlice,
    auth: authSlice,
    loginModal: loginModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
