import * as types from './types';

const initialState = {
  isAuthenticated: false,
  user: null,
  status: 'idle'
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_USER_SUCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        status: 'succeeded'
      }
    }

    case types.LOGOUT_USER: {
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    }

    default: {
      return state;
    }
  }
}