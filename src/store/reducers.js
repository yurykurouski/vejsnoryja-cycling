import { combineReducers } from 'redux';
import currentUser from './current-user/reducer';
import events from './events/reducer';
import gear from './gear/reducer';
import userInfo from './user-info/reducer';

export default combineReducers({
  currentUser, events, gear, userInfo
})