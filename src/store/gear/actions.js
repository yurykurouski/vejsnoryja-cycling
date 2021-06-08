import { createAsyncThunk } from '@reduxjs/toolkit';
import * as types from './types';
import SettingsService from '../../services/settings-service';

export const addNewGear = createAsyncThunk(
  types.ADD_NEW_GEAR, (data) => SettingsService.addNewGear(data),
);

export const getUserGear = createAsyncThunk(
  types.GET_USER_GEAR, () => SettingsService.getUserGear(),
);

export const getUserActiveGear = createAsyncThunk(
  types.GET_USER_ACTIVE_GEAR, (id) => SettingsService.getUserActiveGear(id),
);

export const setActiveGear = createAsyncThunk(
  types.SET_ACTIVE_GEAR, (data) => SettingsService.setActiveGear(data),
);

export const deleteUserGear = createAsyncThunk(
  types.DELETE_USER_GEAR, (id) => SettingsService.deleteGear(id),
);

export const editUserGear = createAsyncThunk(
  types.EDIT_USER_GEAR, (data) => SettingsService.editGear(data),
);
