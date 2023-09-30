import { combineReducers } from 'redux';
import authReducer from './authSlice';
import loginmodalReducer from './modalSlice';
import registerModalReducer from './registerModalSlice';
import commentdepthReducer from './comment';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  loginModal: loginmodalReducer,
  registerModal: registerModalReducer,
  commentdepth: commentdepthReducer,
  ...filterReducer,
});

export default rootReducer;
