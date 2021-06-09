import * as types from './types';
import Utils from '../../utils';
import ActionStatus from '../../constants/store/action-status';

const initialState = {
  isAuthenticated: false,
  user: null,
  userEmail: null,
  authErrors: {
    email: null,
    password: null,
  },
  status: ActionStatus.IDLE,
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_USER_SUCESS:
    case types.LOGIN_USER_SUCESS:
    case types.CHANGE_USER_PASSWORD_SUCESS: {
      return {
        ...state,
        authErrors: { password: null, email: null },
        status: ActionStatus.SUCCEDED,
      };
    }

    case types.LOGIN_USER_FAILURE: {
      const normalized = Utils.normalizeErrorMessage(action.error.message);
      return {
        ...state,
        authErrors: { ...state.authErrors, password: normalized },
        status: ActionStatus.FAILED,
      };
    }

    case types.AUTH_USER_SUCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.userId,
        userEmail: action.payload.userEmail,
        authErrors: { password: null, email: null },
        status: ActionStatus.SUCCEDED,
      };
    }

    case types.AUTH_USER_FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        status: ActionStatus.FAILED,
      };
    }

    case types.CHANGE_USER_EMAIL_SUCESS: {
      return {
        ...state,
        userEmail: action.payload,
        authErrors: { password: null, email: null },
        status: ActionStatus.SUCCEDED,
      };
    }

    case types.REGISTER_USER_FAILURE:
    case types.CHANGE_USER_EMAIL_FAILURE: {
      const normalized = Utils.normalizeErrorMessage(action.error.message);
      return {
        ...state,
        authErrors: { ...state.authErrors, email: normalized },
        status: ActionStatus.FAILED,
      };
    }

    case types.CHANGE_USER_PASSWORD_FAILURE: {
      const normalized = Utils.normalizeErrorMessage(action.error.message);
      return {
        ...state,
        authErrors: { ...state.authErrors, password: normalized },
        status: ActionStatus.SUCCEDED,
      };
    }

    case types.LOGOUT_USER: {
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
        status: ActionStatus.SUCCEDED,
      };
    }

    case types.CHANGE_USER_PASSWORD_REQUEST:
    case types.CHANGE_USER_EMAIL_REQUEST:
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
