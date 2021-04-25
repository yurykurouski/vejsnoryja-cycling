import * as types from './types';

export const authUser = (token) => ({
  type: types.AUTH_USER,
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});


