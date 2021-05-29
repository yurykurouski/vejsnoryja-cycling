import * as types from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import settingsService from '../../services/settings-service';

export const getUserInfo = createAsyncThunk(types.GET_USER_INFO, (id) => settingsService.getUserInfo(id));
export const updateUserInfo = createAsyncThunk(types.UPDATE_USER_INFO, (field) => settingsService.updateUserInfo(field));
