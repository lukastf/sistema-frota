import { createSlice, configureStore } from '@reduxjs/toolkit'

export const numeroSlice = createSlice({
  name: 'numero',
  initialState: {
    numero: ""
  },
  reducers: {
    setNumero: (state, action) => {

      state.numero = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setNumero } = numeroSlice.actions

export const storeNumero = configureStore({
  reducer: numeroSlice.reducer
})