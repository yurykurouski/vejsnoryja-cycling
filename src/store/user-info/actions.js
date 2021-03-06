import { createAsyncThunk } from '@reduxjs/toolkit';
import * as types from './types';
import SettingsService from '../../services/settings-service';

export const getUserInfo = createAsyncThunk(
  types.GET_USER_INFO, (id) => SettingsService.getUserInfo(id),
);

export const updateUserInfo = createAsyncThunk(
  types.UPDATE_USER_INFO, (field) => SettingsService.updateUserInfo(field),
);
