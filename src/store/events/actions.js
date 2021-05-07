import * as types from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import eventService from '../../services/events-service';

export const addEvent = createAsyncThunk(types.CREATE_NEW_EVENT, (newEvent) => eventService.createEvent(newEvent));

export const getAllEvents = createAsyncThunk(types.GET_ALL_EVENTS, () => eventService.getAllEvents());