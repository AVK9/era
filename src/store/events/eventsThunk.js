import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllEventApi, getPageEventApi } from '../../services/eventApi';
// import { setTokenApi } from "services/authApi";

export const getEventsThunk = createAsyncThunk(
  'events/getEvents',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllEventApi();
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const getAdvertsPageThunk = createAsyncThunk(
  'events/getEventsPage',
  async (page, { rejectWithValue }) => {
    try {
      return await getPageEventApi(page);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
