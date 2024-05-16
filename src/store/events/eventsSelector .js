// import { createSelector } from '@reduxjs/toolkit';

export const selectStateEvents = (state) => state.events.events;
export const selectFilter = (state) => state.filter.filter;
export const selectType = (state) => state.filter.type;
export const selectEquipment = (state) => state.filter.equipment;
export const selectLoading = (state) => state.events.isLoading;
export const selectError = (state) => state.events.error;
export const selectPageAnd = (state) => state.events.pageAnd;

// export const selectVisibleAdverts = createSelector(
//   [selectStateAdverts, selectFilter],
//   (adverts, filter) => {
//     return filter.length > 0
//       ? adverts.filter((advert) =>
//           advert.location.toLowerCase().includes(filter.toLowerCase())
//         )
//       : adverts;
//   }
// );
