import { createSlice, configureStore } from '@reduxjs/toolkit'

export const inscEstadualSlice = createSlice({
  name: 'inscEstadual',
  initialState: {
    inscEstadual: ""
  },
  reducers: {
    setInscEstadual: (state, action) => {

      state.inscEstadual = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setInscEstadual } = inscEstadualSlice.actions

export const storeInscEstadual = configureStore({
  reducer: inscEstadualSlice.reducer
})