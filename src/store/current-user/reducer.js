import * as types from './types';
import { AUTH_URL } from '../../constants';

const initialState = {
  isAuthenticated: false,
  user: null
};

export default async function currentUser(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_USER: {
      const token = localStorage.getItem('token');
      const result = fetch(AUTH_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': token
        }
      }).then(res => {
        if (!res.ok) {
          localStorage.removeItem('token');
        } return res.json();
      });

      return {
        ...state,
        isAuthenticated: true,
        user: await result,
      }

    }

    case types.LOGOUT_USER: {
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    }

    default: {
      return state;
    }
  }
}