import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'network',
  initialState: { networkError:false },
  reducers: {
    setNetworkError: (state, { payload: { status } }) => {
        state.networkError = status
    },
  },
})

export const { setNetworkError } = slice.actions

export default slice.reducer
