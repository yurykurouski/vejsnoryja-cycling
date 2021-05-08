import * as types from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/auth-service';

export const authUser = createAsyncThunk(types.AUTH_USER, () => {
  const response = authService.userAuth();

  return response;
});

export const registerUser = createAsyncThunk(types.REGISTER_USER, async (data) => {
  const response = await authService.userRegister(data);

  return response;
});

export const loginUser = createAsyncThunk(types.LOGIN_USER, async (data) => {
  const response = await authService.userLogin(data);

  return response;
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});
