import * as types from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import eventService from '../../services/events-service';

export const addEvent = createAsyncThunk(types.CREATE_NEW_EVENT, async (newEvent) => {
  const response = await eventService.createEvent(newEvent);

  return response;
});
