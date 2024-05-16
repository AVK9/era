import { createSlice } from '@reduxjs/toolkit';
import { getAdvertsPageThunk, getEventsThunk } from './eventsThunk';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
  handleGetEvents,
  handleGetPageEvents,
} from './eventsHandlers';

const initialState = {
  events: [],
  pageAnd: false,
  isLoading: false,
  error: '',
};
const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getEventsThunk.fulfilled, handleGetEvents)
      .addCase(getAdvertsPageThunk.fulfilled, handleGetPageEvents)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const eventsReduser = eventsSlice.reducer;
