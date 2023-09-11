import { combineReducers } from 'redux';
import authReducer from './authSlice';
import registerModalReducer from './registerModalSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  registerModal: registerModalReducer,
});

export default rootReducer;
