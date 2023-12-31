import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    },
  },
});

export interface ContestFilterStoreType {
  pageNumber: number;
  query: string;
  setQuery: (query: string) => void;
  setPageNumber: (pageNumber: number) => void;
  reset: () => void;
}

const contestFilterSlice = createSlice({
  name: 'contestFilter',
  initialState: {
    pageNumber: 0,
    query: 'active',
  },
  reducers: {
    setContestQuery(state, action) {
      state.query = action.payload;
    },
    setContestPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
  },
});

const NoticeFilterSlice = createSlice({
  name: 'noticeFilter',
  initialState: {
    pageNumber: 0,
    query: 'notice',
    SearchValue: '',
    SearchOption: 'title',
    SearchCategory: '제목',
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    setSearchCategory(state, action) {
      state.SearchCategory = action.payload;
    },
    setSearchOption(state, action) {
      state.SearchOption = action.payload;
    },
    setSearchValue(state, action) {
      state.SearchValue = action.payload;
    },
  },
});

const workbookFilterSlice = createSlice({
  name: 'workbookFilter',
  initialState: {
    pageNum: 0,
    title: '',
    description: '',
  },
  reducers: {
    setPageNum(state, action) {
      state.pageNum = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },

    setReset(state) {
      state.pageNum = 0;
      state.title = '';
      state.description = '';
    },
  },
});

const problemFilterSlice = createSlice({
  name: 'problemFilter',
  initialState: {
    pageNumber: 0,
  },
  reducers: {
    setProblemPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
  },
});

const myPageStatusFilterSlice = createSlice({
  name: 'myPageStatusFilter',
  initialState: {
    pageNumber: 0,
  },
  reducers: {
    setmyPageStatusPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
  },
});

export const { setmyPageStatusPageNumber } = myPageStatusFilterSlice.actions;
export const { handlePage, reset } = pageNumberSlice.actions;
export const { setRequestQuery, setPageNumber } = requestFilterSlice.actions;
export const {
  setQuery: setNoticeFilterQuery,
  setPageNumber: setNoticeFilterPageNumber,
  setSearchCategory: setNoticeFilterSearchCategory,
  setSearchValue: setNoticeFilterSearchValue,
  setSearchOption: setNoticeFilterearchOption,
} = NoticeFilterSlice.actions;
export const { setTitle, setDescription, setPageNum, setReset } =
  workbookFilterSlice.actions;

export const { setStatus, setStatusValue, toggleStatusActive } =
  statusFilterSlice.actions;
export const { setCategory, setCategoryValue, toggleCategoryActive } =
  categoryFilterSlice.actions;
export const { setProblemQuery } = queryFilterSlice.actions;
export const { setContestQuery, setContestPageNumber } =
  contestFilterSlice.actions;
export const { setProblemPageNumber } = problemFilterSlice.actions;

export const filterReducer = {
  page: pageNumberSlice.reducer,
  filter: requestFilterSlice.reducer,
  Noticefilter: NoticeFilterSlice.reducer,
  statusFilter: statusFilterSlice.reducer,
  categoryFilter: categoryFilterSlice.reducer,
  queryFilter: queryFilterSlice.reducer,
  workbookfilter: workbookFilterSlice.reducer,
  problemFilter: problemFilterSlice.reducer,
  contestFilter: contestFilterSlice.reducer,
  myPageStatusFilter: myPageStatusFilterSlice.reducer,
};
