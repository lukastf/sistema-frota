import { createSlice, configureStore } from '@reduxjs/toolkit'

export const nomeFantasiaSlice = createSlice({
  name: 'nomeFantasia',
  initialState: {
    nomeFantasia: ""
  },
  reducers: {
    setNomeFantasia: (state, action) => {

      state.nomeFantasia = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setNomeFantasia } = nomeFantasiaSlice.actions

export const storeNomeFantasia = configureStore({
  reducer: nomeFantasiaSlice.reducer
})