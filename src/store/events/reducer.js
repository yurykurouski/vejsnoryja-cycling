import * as types from './types';
import ActionStatus from '../../constants/action-status';

const initialState = {
  events: [],
  status: ActionStatus.IDLE
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_NEW_EVENT_REQUEST:
    case types.CREATE_NEW_EVENT_SUCESS: {
      console.log(action.payload)
      return {
        ...state,
        events: [...state.events, action.payload],
        status: ActionStatus.SUCCEDED
      }
    }
    default: {
      return state;
    }
  }
}