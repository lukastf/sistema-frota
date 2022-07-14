import { createSlice, configureStore } from '@reduxjs/toolkit'

export const celularGestorSlice = createSlice({
  name: 'celularGestor',
  initialState: {
    celularGestor: ""
  },
  reducers: {
    setCelularGestor: (state, action) => {

      state.celularGestor = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCelularGestor } = celularGestorSlice.actions

export const storeCelularGestor = configureStore({
  reducer: celularGestorSlice.reducer
})