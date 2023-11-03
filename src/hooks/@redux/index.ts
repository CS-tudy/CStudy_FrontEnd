import { combineReducers } from 'redux';
import authReducer from './authSlice';
import loginmodalReducer from './modalSlice';
import registerModalReducer from './registerModalSlice';
import commentReducer from './comment';
import { filterReducer } from './filterSlice';
import alarmReducer from './alarmSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  loginModal: loginmodalReducer,
  registerModal: registerModalReducer,
  comment: commentReducer,
  alarm: alarmReducer,
  ...filterReducer,
});

export default rootReducer;
