import { createAsyncThunk } from '@reduxjs/toolkit';
import * as types from './types';
import eventService from '../../services/events-service';

export const addEvent = createAsyncThunk(types.CREATE_NEW_EVENT, (newEvent) => {
  eventService.createEvent(newEvent);
});

export const getAllEvents = createAsyncThunk(
  types.GET_ALL_EVENTS, () => eventService.getAllEvents(),
);

export const getEventsByUser = createAsyncThunk(types.GET_EVENTS_BY_USER, (id) => {
  eventService.getEventsByUser(id);
});

export const updateEventById = createAsyncThunk(types.UPDATE_EVENT_BY_ID, (data) => {
  eventService.updateEventById(data);
});
export const deleteEventById = createAsyncThunk(types.DELETE_EVENT_BY_ID, (data) => {
  eventService.deleteEventById(data);
});

export const userInOutEvent = createAsyncThunk(types.EVENT_USER_IN_OUT, (data) => {
  eventService.userInOutEvent(data);
});
