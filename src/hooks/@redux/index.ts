import { combineReducers } from 'redux';
import authReducer from './authSlice';
import loginmodalReducer from './modalSlice';
import registerModalReducer from './registerModalSlice';
import commentReducer from './comment';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  loginModal: loginmodalReducer,
  registerModal: registerModalReducer,
  comment: commentReducer,
  ...filterReducer,
});

export default rootReducer;
