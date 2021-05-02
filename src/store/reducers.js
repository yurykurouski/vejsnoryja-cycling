import { combineReducers } from 'redux';
import currentUser from './current-user/reducer';
import events from './events/reducer';


export default combineReducers({
  currentUser, events
})