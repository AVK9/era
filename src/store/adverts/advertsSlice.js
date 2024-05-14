import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handleGetPageAdverts,
  handlePending,
  handleRejected,
} from './advertsHandlers';
import { handleGetAdverts } from './advertsHandlers';
import { getAdvertsPageThunk, getAdvertsThunk } from './advertsThunk';

const initialState = {
  adverts: [],
  pageAnd: false,
  isLoading: false,
  error: '',
};
const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAdvertsThunk.fulfilled, handleGetAdverts)
      .addCase(getAdvertsPageThunk.fulfilled, handleGetPageAdverts)
      //   .addCase(delContactThunk.fulfilled, handleDelContact)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const advertsReduser = advertsSlice.reducer;
