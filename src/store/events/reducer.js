import * as types from './types';
import ActionStatus from '../../constants/action-status';

const initialState = {
  events: [],
  status: ActionStatus.IDLE
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_NEW_EVENT_SUCESS: {
      return {
        ...state,
        events: [...state.events, action.payload],
        status: ActionStatus.SUCCEDED
      };
    }
      
    case types.GET_ALL_EVENTS_SUCESS: {
      return {
        ...state,
        events: action.payload,
        status: ActionStatus.SUCCEDED
      };
    }

    case types.GET_ALL_EVENTS_REQUEST:
    case types.CREATE_NEW_EVENT_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING
      }
    }
      
    default: {
      return state;
    }
  }
}