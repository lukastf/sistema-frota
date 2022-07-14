import { createSlice, configureStore } from '@reduxjs/toolkit'

export const celularSlice = createSlice({
  name: 'celular',
  initialState: {
    celular: ""
  },
  reducers: {
    setCelular: (state, action) => {

      state.celular = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCelular } = celularSlice.actions

export const storeCelular = configureStore({
  reducer: celularSlice.reducer
})