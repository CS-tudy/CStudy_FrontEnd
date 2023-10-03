import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageNumber: 0,
  depth: {
    maxDepth: 3,
    currentDepth: 0,
  },
  isReplying: false, // 대댓글 작성 중인지 여부
  selectedCommentid: '',
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setpageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    setMaxDepth(state, action) {
      state.depth.maxDepth = action.payload;
    },
    setCurrentDepth(state, action) {
      state.depth.currentDepth = action.payload;
    },
    toggleReplying(state) {
      state.isReplying = !state.isReplying;
    },
    setCommentId(state, action) {
      state.selectedCommentid =
        state.selectedCommentid === action.payload ? '' : action.payload;
    },
  },
});

export const {
  setMaxDepth,
  setCurrentDepth,
  toggleReplying,
  setpageNumber,
  setCommentId,
} = commentSlice.actions;

export default commentSlice.reducer;
