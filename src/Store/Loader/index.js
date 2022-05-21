import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'loader',
  initialState: { isLoading: false },
  reducers: {
    setIsLoading: (state, { payload: { isLoading } }) => {
          state.isLoading = isLoading;
    },
  },
})

export const { setIsLoading } = slice.actions;

export default slice.reducer
