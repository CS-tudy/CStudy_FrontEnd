import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../hooks/@redux';
import persistedReducer from 'hooks/@redux/persistConfig';
import { persistStore } from 'redux-persist';
import problemSlice from 'hooks/@redux/problemSlice';
import registerModalSlice from 'hooks/@redux/registerModalSlice';
import loginModalSlice from 'hooks/@redux/loginModalSlice';
const store = configureStore({
  reducer: {
    persistedReducer,
    problem: problemSlice,
    registerModal: registerModalSlice,
    loginModal: loginModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
