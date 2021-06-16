import * as types from './types';
import ActionStatus from '../../constants/store/action-status';
import Utils from '../../utils';

const initialState = {
  events: [],
  sortingType: 'Date: Newest to Oldest',
  filters: [],
  status: ActionStatus.IDLE,
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_NEW_EVENT_SUCESS: {
      return {
        ...state,
        events: [action.payload, ...state.events],
        status: ActionStatus.SUCCEDED,
      };
    }

    case types.GET_ALL_EVENTS_SUCESS:
    case types.GET_EVENTS_BY_USER_SUCESS: {
      const sortedEvents = Utils.sortEventsBySortingType(action.payload, state.sortingType);
      return {
        ...state,
        events: sortedEvents,
        status: ActionStatus.SUCCEDED,
      };
    }

    case types.UPDATE_EVENT_BY_ID_SUCESS: {
      const updatedEvents = state.events.map((event) => {
        if (event._id === action.payload._id) {
          return action.payload;
        }
        return event;
      });

      return {
        ...state,
        events: updatedEvents,
        status: ActionStatus.SUCCEDED,
      };
    }

    case types.DELETE_EVENT_BY_ID_SUCESS: {
      const filteredEvents = state.events.filter((event) => event._id !== action.payload._id);
      return {
        ...state,
        events: filteredEvents,
        status: ActionStatus.SUCCEDED,
      };
    }

    case types.EVENT_USER_IN_OUT_SUCESS: {
      const updatedEvents = state.events.map((event) => {
        if (event._id === action.payload._id) return action.payload;
        return event;
      });

      return {
        ...state,
        events: updatedEvents,
        status: ActionStatus.SUCCEDED,
      };
    }

    case types.CHANGE_EVENTS_SORTING_TYPE: {
      const sortedEvents = Utils.sortEventsBySortingType(state.events, action.sortingType);
      return {
        ...state,
        events: sortedEvents,
        sortingType: action.sortingType,
      };
    }

    case types.CHANGE_EVENTS_FILTERS: {
      let updatedFilters = [...state.filters];

      if (state.filters.includes(action.filter)) {
        updatedFilters = state.filters.filter((filter) => filter !== action.filter);
      } else {
        updatedFilters.push(action.filter);
      }

      return {
        ...state,
        filters: updatedFilters,
      };
    }

    case types.DELETE_EVENT_BY_ID_REQUEST:
    case types.UPDATE_EVENT_BY_ID_REQUEST:
    case types.GET_ALL_EVENTS_REQUEST:
    case types.GET_EVENTS_BY_USER_REQUEST:
    case types.CREATE_NEW_EVENT_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING,
      };
    }

    case types.EVENT_USER_IN_OUT_FAILURE: {
      return {
        ...state,
        status: ActionStatus.FAILED,
      };
    }

    default: {
      return state;
    }
  }
}
