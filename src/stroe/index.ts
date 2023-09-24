import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../hooks/@redux';
import persistedReducer from 'hooks/@redux/persistConfig';
import { persistStore } from 'redux-persist';
import problemSlice from 'hooks/@redux/problemSlice';

const store = configureStore({
  reducer: {
    rootReducer,
    problem: problemSlice,
  },
});

export default store;
