import * as types from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import eventService from '../../services/events-service';

export const addEvent = createAsyncThunk(types.CREATE_NEW_EVENT, (newEvent) => eventService.createEvent(newEvent));
