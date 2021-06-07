import { combineReducers } from 'redux';
import gear from './gear/reducer';
import events from './events/reducer';
import userInfo from './user-info/reducer';
import currentUser from './current-user/reducer';

export default combineReducers({
  currentUser, events, gear, userInfo
});
