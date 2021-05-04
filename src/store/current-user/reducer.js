import ActionStatus from "../../constants/action-status";
import * as types from './types';

const initialState = {
  isAuthenticated: false,
  user: null,
  authErrors: null,
  status: 'idle'
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    //* при неправильном пароле почему-то срабатывает SUCESS, хотя серв при неправмльном пароле кидает 401 и сообщение об ошибке
    case types.LOGIN_USER_SUCESS: {
      console.log(action.payload)
      return {
        ...state,
        status: ActionStatus.SUCCEDED
      }
    }
    // failure вообще не срабатывает
    case types.LOGIN_USER_FAILURE: {
      console.log(action.payload)
      return {
        ...state,
        authErrors: action.payload
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

    default: {
      return state;
    }
  }
}