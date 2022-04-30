import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: { token: null, user: null },
  reducers: {
    setToken: (state, { payload: { token } }) => {
      if (!state.token) {
        state.token = token
      }
    },
    setAuthenticatedUser: (state, { payload: { user } }) => {
      state.user = user;
    },
  },
})

export const { setToken, setAuthenticatedUser } = slice.actions

export default slice.reducer
