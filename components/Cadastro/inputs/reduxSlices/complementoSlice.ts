import { createSlice, configureStore } from '@reduxjs/toolkit'

export const complementoSlice = createSlice({
  name: 'complemento',
  initialState: {
    complemento: ""
  },
  reducers: {
    setComplemento: (state, action) => {

      state.complemento = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setComplemento } = complementoSlice.actions

export const storeComplemento = configureStore({
  reducer: complementoSlice.reducer
})