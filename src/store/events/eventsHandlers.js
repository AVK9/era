export const handlePending = (state) => {
  state.isLoading = true;
  console.log('isLoadingisLoading', 2222);
  state.error = '';
};
export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleGetEvents = (state, { payload }) => {
  state.events = payload;
  console.log('handleGetAdverts :>> ', payload);
};

export const handleGetPageEvents = (state, { payload }) => {
  if (!payload.length) {
    state.pageAnd = true;
  }

  if (state.events.length === 0) {
    state.events = payload;
  } else {
    state.adverts = [...state.events, ...payload];
 
  }

  console.log('handleGetPageAdverts :>> ', payload);
};

