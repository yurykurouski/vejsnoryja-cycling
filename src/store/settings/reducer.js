import * as types from './types';
import ActionStatus from '../../constants/action-status';

const initialState = {
  userInfo: {},
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

    case types.UPDATE_USER_INFO_REQUEST:
    case types.GET_USER_INFO_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING
      }
    }

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