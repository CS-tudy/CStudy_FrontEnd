import { combineReducers } from 'redux';
import authReducer from './authSlice';
import loginmodalReducer from './modalSlice';
import registerModalReducer from './registerModalSlice';
import commentReducer from './comment';

const rootReducer = combineReducers({
  auth: authReducer,
  loginModal: loginmodalReducer,
  registerModal: registerModalReducer,
  comment: commentReducer, // 수정된 부분
});

export default rootReducer;
