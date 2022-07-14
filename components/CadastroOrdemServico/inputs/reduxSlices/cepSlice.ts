import { createSlice, configureStore } from '@reduxjs/toolkit'

export const cepSlice = createSlice({
  name: 'cep',
  initialState: {
    cep: ""
  },
  reducers: {
    setCep: (state, action) => {

      state.cep = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCep } = cepSlice.actions

export const storeCep = configureStore({
  reducer: cepSlice.reducer
})