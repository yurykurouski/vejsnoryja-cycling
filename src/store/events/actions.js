import * as types from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import eventService from '../../services/events-service';

export const addEvent = createAsyncThunk(types.CREATE_NEW_EVENT, (newEvent) => eventService.createEvent(newEvent));
export const getAllEvents = createAsyncThunk(types.GET_ALL_EVENTS, () => eventService.getAllEvents());
export const getEventsByUser = createAsyncThunk(types.GET_EVENTS_BY_USER, (id) => eventService.getEventsByUser(id));

export const updateEventById = createAsyncThunk(types.UPDATE_EVENT_BY_ID, (data) => eventService.updateEventById(data));
export const deleteEventById = createAsyncThunk(types.DELETE_EVENT_BY_ID, (data) => eventService.deleteEventById(data));

export const userInEvent = createAsyncThunk(types.EVENT_USER_IN, (data) => eventService.userInEvent(data));