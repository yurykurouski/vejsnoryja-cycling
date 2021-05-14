import { combineReducers } from 'redux';
import currentUser from './current-user/reducer';
import events from './events/reducer';
import settings from './settings/reducer';


export default combineReducers({
  currentUser, events, settings
})