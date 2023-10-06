import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ROUTE } from 'constants/Route';

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
    setRequestQuery(state, action) {
      state.query = action.payload;
    },
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
  },
});

const statusFilterSlice = createSlice({
  name: 'statusFilter',
  initialState: {
    status: '상태',
    statusValue: 0,
    statusActive: false,
  },
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setStatusValue(state, action: PayloadAction<number>) {
      state.statusValue = action.payload;
    },
    toggleStatusActive(state) {
      state.statusActive = !state.statusActive;
    },
  },
});

const categoryFilterSlice = createSlice({
  name: 'categoryFilter',
  initialState: {
    category: '카테고리',
    categoryValue: '네트워크',
    categoryActive: false,
  },
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setCategoryValue(state, action: PayloadAction<string>) {
      state.categoryValue = action.payload;
    },
    toggleCategoryActive(state) {
      state.categoryActive = !state.categoryActive;
    },
  },
});

export interface QueryFilterStoreType {
  query: string;
  setProblemQuery: (query: string) => void;
}

const queryFilterSlice = createSlice({
  name: 'queryFilter',
  initialState: {
    query: '',
    queryActive: '',
  },
  reducers: {
    setProblemQuery(state, action) {
      state.query = action.payload;
      // state.QueryActive = state.query === ROUTE.PROBLEMSET_MYQUESTION;
    },
    // reset(state) {
    //   return {
    //     query: '',
    //     isActive: false,
    //   };
    // },
  },
});

const contestFilterSlice = createSlice({
  name: 'contestFilter',
  initialState: {
    pageNumber: 0,
    query: '',
  },
  reducers: {
    setContestQuery(state, action) {
      state.query = action.payload;
    },
    setContestPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    setSearchInput(state, action) {
      state.SearchTitle = action.payload;
    },
    setContenthInput(state, action) {
      state.SearchContent = action.payload;
    },
    setSearchReset(state) {
      state.SearchTitle = '';
      state.SearchContent = '';
    },
  },
});

const categoryFilterSlice = createSlice({
  name: 'categoryFilter',
  initialState: {
    category: '',
    categoryValue: '',
    categoryActive: false,
  },
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setCategoryValue(state, action: PayloadAction<string>) {
      state.categoryValue = action.payload;
    },
    toggleCategoryActive(state) {
      state.categoryActive = !state.categoryActive;
    },
  },
});

const queryFilterSlice = createSlice({
  name: 'queryFilter',
  initialState: {
    query: '',
    queryActive: '',
  },
  reducers: {
    setProblemQuery(state, action) {
      state.query = action.payload;
      // state.QueryActive = state.query === ROUTE.PROBLEMSET_MYQUESTION;
    },
    // reset(state) {
    //   return {
    //     query: '',
    //     isActive: false,
    //   };
    // },
  },
});

export const { handlePage, reset } = pageNumberSlice.actions;
export const { setRequestQuery, setPageNumber } = requestFilterSlice.actions;
export const {
  setQuery: setNoticeFilterQuery,
  setPageNumber: setNoticeFilterPageNumber,
  setSearchInput: setNoticeFilterSearchTitle,
  setContenthInput: setNoticeFilterSearchContent,
  setSearchReset: setNoticeFilterSearchReset,
} = NoticeFilterSlice.actions;

export const { setStatus, setStatusValue, toggleStatusActive } =
  statusFilterSlice.actions;
export const { setCategory, setCategoryValue, toggleCategoryActive } =
  categoryFilterSlice.actions;
export const { setProblemQuery } = queryFilterSlice.actions;

export const filterReducer = {
  page: pageNumberSlice.reducer,
  filter: requestFilterSlice.reducer,
  Noticefilter: NoticeFilterSlice.reducer,
  statusFilter: statusFilterSlice.reducer,
  categoryFilter: categoryFilterSlice.reducer,
  queryFilter: queryFilterSlice.reducer,
};
