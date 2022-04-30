import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'toaster',
  initialState: { message: "", show: true,duration: 1000},
  reducers: {
    setToaster: (state, { payload: { message,show=true,duration=1000 } }) => {

        state.message = message;
        state.show = show;
        state.duration = duration;
    
    },
  },
})

export const { setToaster } = slice.actions

export default slice.reducer
