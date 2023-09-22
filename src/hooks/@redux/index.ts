import { combineReducers } from 'redux';
import authReducer from './authSlice';
import loginmodalReducer from './modalSlice';
import registerModalReducer from './registerModalSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
