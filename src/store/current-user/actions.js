import * as types from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from "../../services/auth-service";

export const authUser = createAsyncThunk(types.AUTH_USER, async () => {
  const response = await authService.userAuth();
  
  return response;
});

/* export const loginUser = createAsyncThunk(types.LOGIN_USER, async () => {
  
}) */

 export const logoutUser = () => ({
  type: types.LOGOUT_USER,
}); 
