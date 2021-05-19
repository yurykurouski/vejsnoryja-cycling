import * as types from './types';
import ActionStatus from '../../constants/action-status';

const initialState = {
  userInfo: {},
  gear: [],
  status: ActionStatus.IDLE
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_INFO_SUCESS: {
      return {
        ...state,
        userInfo: action.payload,
        status: ActionStatus.SUCCEDED
      };
    }
    case types.UPDATE_USER_INFO_SUCESS: {
      return {
        ...state,
        userInfo: action.payload,
        status: ActionStatus.SUCCEDED
      };
    }

    case types.ADD_NEW_GEAR_SUCESS: {
      return {
        ...state,
        gear: [...state.gear, action.payload],
        status: ActionStatus.SUCCEDED
      };
    }

    case types.GET_USER_GER_SUCESS: {
      return {
        ...state,
        gear: action.payload,
        status: ActionStatus.SUCCEDED
      };
    }

    case types.GET_USER_GER_REQUEST:
    case types.ADD_NEW_GEAR_REQUEST:
    case types.UPDATE_USER_INFO_REQUEST:
    case types.GET_USER_INFO_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING
      }
    }

    case types.GET_USER_GER_FAILURE:
    case types.ADD_NEW_GEAR_FAILURE:
    case types.UPDATE_USER_INFO_FAILURE:
    case types.GET_USER_INFO_FAILURE: {
      return {
        ...state,
        status: ActionStatus.FAILED
      }
    }

    default: {
      return state;
    }
  }
}