import * as types from './types';
import ActionStatus from '../../constants/store/action-status';

const initialState = {
  isAuthenticated: false,
  user: null,
  authErrors: null,
  status: ActionStatus.IDLE
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_USER_SUCESS: {
      return {
        ...state,
        authErrors: null,
        status: ActionStatus.SUCCEDED
      }
    }

    case types.REGISTER_USER_FAILURE: {
      return {
        ...state,
        authErrors: action.error.message,
        status: ActionStatus.FAILED
      }
    }

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

    case types.AUTH_USER_FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        status: ActionStatus.FAILED
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

    case types.REGISTER_USER_REQUEST:
    case types.LOGIN_USER.REQUEST:
    case types.AUTH_USER_REQUEST: {
      return { ...state, status: ActionStatus.LOADING };
    }

    default: {
      return state;
    }
  }
}