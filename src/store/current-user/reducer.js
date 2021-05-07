import ActionStatus from "../../constants/action-status";
import * as types from './types';

const initialState = {
  isAuthenticated: false,
  user: null,
  authErrors: null,
  status: ActionStatus.IDLE
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCESS: {
      return {
        ...state,
        authErrors: null,
        status: ActionStatus.SUCCEDED
      }
    }

    case types.LOGIN_USER_FAILURE: {
      return {
        ...state,
        authErrors: action.error.message,
        status: ActionStatus.FAILED
      }
    }

    case types.AUTH_USER_SUCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        status: ActionStatus.SUCCEDED
      }
    }

    case types.LOGOUT_USER: {
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        status: ActionStatus.SUCCEDED
      };
    }

    case types.LOGIN_USER.REQUEST:
    case types.AUTH_USER_REQUEST: {
      return { ...state, status: ActionStatus.LOADING };
    }

    default: {
      return state;
    }
  }
}