import { createAsyncThunk } from '@reduxjs/toolkit';
import * as types from './types';
import EventsService from '../../services/events-service';

export const addEvent = createAsyncThunk(
  types.CREATE_NEW_EVENT, (newEvent) => EventsService.createEvent(newEvent),
);

export const getAllEvents = createAsyncThunk(
  types.GET_ALL_EVENTS, () => EventsService.getAllEvents(),
);

export const getEventsByUser = createAsyncThunk(
  types.GET_EVENTS_BY_USER, (id) => EventsService.getEventsByUser(id),
);

export const updateEventById = createAsyncThunk(
  types.UPDATE_EVENT_BY_ID, (data) => EventsService.updateEventById(data),
);

export const deleteEventById = createAsyncThunk(
  types.DELETE_EVENT_BY_ID, (data) => EventsService.deleteEventById(data),
);

export const userInOutEvent = createAsyncThunk(
  types.EVENT_USER_IN_OUT, (data) => EventsService.userInOutEvent(data),
);
