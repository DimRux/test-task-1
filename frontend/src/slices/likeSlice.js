import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likeNeoflex: 0,
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    plusLike: (state) => {
      state.likeNeoflex += 1;
    },
  },
});

export const { plusLike } = likeSlice.actions;

export default likeSlice.reducer;