import { createAsyncThunk } from '@reduxjs/toolkit';
import * as types from './types';
import AuthService from '../../services/auth-service';

export const authUser = createAsyncThunk(
  types.AUTH_USER, () => AuthService.userAuth(),
);

export const registerUser = createAsyncThunk(
  types.REGISTER_USER, (data) => AuthService.userRegister(data),
);

export const loginUser = createAsyncThunk(
  types.LOGIN_USER, (data) => AuthService.userLogin(data),
);

export const changeUserEmail = createAsyncThunk(
  types.CHANGE_USER_EMAIL, (data) => AuthService.changeAuthData(data),
);

export const changeUserPassword = createAsyncThunk(
  types.CHANGE_USER_PASSWORD, (data) => AuthService.changeAuthData(data),
);

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});
