import { createSlice, configureStore } from '@reduxjs/toolkit'

export const cidadeSlice = createSlice({
  name: 'cidade',
  initialState: {
    cidade: ""
  },
  reducers: {
    setCidade: (state, action) => {

      state.cidade = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCidade } = cidadeSlice.actions

export const storeCidade = configureStore({
  reducer: cidadeSlice.reducer
})