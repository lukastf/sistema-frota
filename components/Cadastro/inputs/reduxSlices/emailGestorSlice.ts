import { createSlice, configureStore } from '@reduxjs/toolkit'

export const emailGestorSlice = createSlice({
  name: 'emailGestor',
  initialState: {
    emailGestor: ""
  },
  reducers: {
    setEmailGestor: (state, action) => {

      state.emailGestor = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setEmailGestor } = emailGestorSlice.actions

export const storeEmailGestor = configureStore({
  reducer: emailGestorSlice.reducer
})