import { combineReducers } from 'redux';
import authReducer from './authSlice';
import registerModalReducer from './registerModalSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  loginModal: loginmodalReducer,
  registerModal: registerModalReducer,
  ...filterReducer,
});

export default rootReducer;
