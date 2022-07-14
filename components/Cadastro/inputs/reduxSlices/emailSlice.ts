import { createSlice, configureStore } from '@reduxjs/toolkit'

export const emailSlice = createSlice({
  name: 'email',
  initialState: {
    email: ""
  },
  reducers: {
    setEmail: (state, action) => {

      state.email = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setEmail } = emailSlice.actions

export const storeEmail = configureStore({
  reducer: emailSlice.reducer
})