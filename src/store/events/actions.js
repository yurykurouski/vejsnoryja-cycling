import { createAsyncThunk } from '@reduxjs/toolkit';
import * as types from './types';
import EventsService from '../../services/events-service';

export const addEvent = createAsyncThunk(
  types.CREATE_NEW_EVENT, (newEvent) => EventsService.createEvent(newEvent),
);

export const getAllEvents = createAsyncThunk(
  types.GET_ALL_EVENTS, (items) => EventsService.getAllEvents(items),
);

export const getEventsByUser = createAsyncThunk(
  types.GET_EVENTS_BY_USER, (query) => EventsService.getEventsByUser(query),
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

export const changeEventsSortingType = (sortingType) => ({
  sortingType,
  type: types.CHANGE_EVENTS_SORTING_TYPE,
});

export const changeEventsFilteringType = (filter) => ({
  filter,
  type: types.CHANGE_EVENTS_FILTERS,
});
