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

    case types.GET_EVENTS_BY_USER_SUCESS: {
      return {
        ...state,
        events: action.payload,
        status: ActionStatus.SUCCEDED
      };
    }

    case types.UPDATE_EVENT_BY_ID_SUCESS: {
      const updatedEvents = state.events.map(event => {
        if (event._id === action.payload._id) {
          return action.payload;
        }
        return event;
      })

      return {
        ...state,
        events: updatedEvents,
        status: ActionStatus.SUCCEDED
      }
    }

    case types.UPDATE_EVENT_BY_ID_REQUEST:
    case types.GET_ALL_EVENTS_REQUEST:
    case types.GET_EVENTS_BY_USER_REQUEST:
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