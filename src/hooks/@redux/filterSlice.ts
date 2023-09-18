import { createSlice } from '@reduxjs/toolkit';

const pageNumberSlice = createSlice({
  name: 'pageNumber',
  initialState: {
    pageNumber: 0,
  },
  reducers: {
    handlePage(state, action) {
      state.pageNumber = action.payload;
    },
    reset(state) {
      state.pageNumber = 0;
    },
  },
});

const requestFilterSlice = createSlice({
  name: 'requestFilter',
  initialState: {
    pageNumber: 0,
    query: 'requests',
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    reset(state) {
      state.query = '';
      state.pageNumber = 0;
    },
  },
});

export const { handlePage, reset } = pageNumberSlice.actions;
export const { setQuery, setPageNumber } = requestFilterSlice.actions;

export const filterReducer = {
  page: pageNumberSlice.reducer,
  filter: requestFilterSlice.reducer,
};
