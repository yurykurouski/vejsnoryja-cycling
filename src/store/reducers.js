import { combineReducers } from 'redux';
import currentUser from './current-user/reducer';

export default combineReducers({
  currentUser,
})