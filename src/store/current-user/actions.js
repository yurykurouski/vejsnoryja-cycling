import * as types from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/auth-service';

export const authUser = createAsyncThunk(types.AUTH_USER, () => authService.userAuth());

export const registerUser = createAsyncThunk(types.REGISTER_USER, (data) => authService.userRegister(data));

export const loginUser = createAsyncThunk(types.LOGIN_USER, (data) => authService.userLogin(data));

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});
