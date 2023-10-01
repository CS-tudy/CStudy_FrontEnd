import { createSlice } from '@reduxjs/toolkit';
import { useGetMypage } from 'hooks/mypage/useGetMypage';
import store from 'stroe';

export interface myPageStatusState {
  status: {
    content: [
      {
        id: number;
        flag: false;
        title: string;
        description: string;
        memberId: number;
        memberName: string;
        createAt: string;
      },
    ];
    pageable: {
      sort: {
        unsorted: false;
        sorted: true;
        empty: false;
      };
      pageSize: number;
      pageNumber: number;
      offset: number;
      paged: true;
      unpaged: false;
    };
    last: true;
    totalPages: number;
    totalElements: number;
    number: number;
    first: true;
    sort: {
      unsorted: false;
      sorted: true;
      empty: false;
    };
    numberOfElements: number;
    size: number;
    empty: false;
  };
  error: null;
  loading: boolean;
}

const initialState: myPageStatusState = {
  status: {
    content: [
      {
        id: 0,
        flag: false,
        title: '',
        description: '',
        memberId: 0,
        memberName: '',
        createAt: '',
      },
    ],
    pageable: {
      sort: {
        unsorted: false,
        sorted: true,
        empty: false,
      },
      pageSize: 10,
      pageNumber: 0,
      offset: 0,
      paged: true,
      unpaged: false,
    },
    last: true,
    totalPages: 1,
    totalElements: 1,
    number: 0,
    first: true,
    sort: {
      unsorted: false,
      sorted: true,
      empty: false,
    },
    numberOfElements: 1,
    size: 10,
    empty: false,
  },

  error: null,
  loading: true,
};

const MypageStatusSlice = createSlice({
  name: 'myPageStatus',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(useGetMypage.pending, state => {
      state.loading = false;
    });
    builder.addCase(useGetMypage.fulfilled, (state, action) => {
      state.status = action.payload;
    });
    builder.addCase(useGetMypage.rejected, state => {
      state.loading = true;
    });
  },
});

export default MypageStatusSlice.reducer;
