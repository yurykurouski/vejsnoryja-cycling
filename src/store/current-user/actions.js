import * as types from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from "../../services/auth-service";

export const authUser = createAsyncThunk(types.AUTH_USER, async () => {
  const token = localStorage.getItem('token');
  const response = await authService.userAuth(token);

  return response;
});

  


 export const logoutUser = () => ({
  type: types.LOGOUT_USER,
}); 
