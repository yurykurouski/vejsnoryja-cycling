import * as types from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import settingsService from '../../services/settings-service';

export const addNewGear = createAsyncThunk(types.ADD_NEW_GEAR, (data) => settingsService.addNewGear(data));
export const getUserGear = createAsyncThunk(types.GET_USER_GEAR, () => settingsService.getUserGear());
export const getUserActiveGear = createAsyncThunk(types.GET_USER_ACTIVE_GEAR, (id) => settingsService.getUserActiveGear(id));
export const setActiveGear = createAsyncThunk(types.SET_ACTIVE_GEAR, (data) => settingsService.setActiveGear(data));
export const deleteUserGear = createAsyncThunk(types.DELETE_USER_GEAR, (id) => settingsService.deleteGear(id));
export const editUserGear = createAsyncThunk(types.EDIT_USER_GEAR, (data) => settingsService.editGear(data));