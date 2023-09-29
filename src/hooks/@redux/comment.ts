import { createSlice } from '@reduxjs/toolkit';

const CommentNumberSlice = createSlice({
  name: 'commentDetailNumber',
  initialState: {
    pageNumber: 0,
  },
  reducers: {
    handlePage(state, action) {
      state.pageNumber = action.payload;
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

export const { handlePage } = CommentNumberSlice.actions;
export const filterReducer = {
  page: CommentNumberSlice.reducer,
  detail: requestFilterSlice.reducer,
};
