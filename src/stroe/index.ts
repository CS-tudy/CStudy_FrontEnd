import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../hooks/@redux';
import persistedReducer from 'hooks/@redux/persistConfig';
import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
