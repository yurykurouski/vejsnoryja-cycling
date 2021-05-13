import * as types from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import eventService from '../../services/events-service';

export const addEvent = createAsyncThunk(types.CREATE_NEW_EVENT, (newEvent) => eventService.createEvent(newEvent));

export const getAllEvents = createAsyncThunk(types.GET_ALL_EVENTS, () => eventService.getAllEvents());

export const getEventsByUser = createAsyncThunk(types.GET_EVENTS_BY_USER, () => eventService.getEventsByUser());

export const updateEventById = createAsyncThunk(types.UPDATE_EVENT_BY_ID, (data) => eventService.updateEventById(data))