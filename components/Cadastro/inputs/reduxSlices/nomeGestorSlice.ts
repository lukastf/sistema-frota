import { createSlice, configureStore } from '@reduxjs/toolkit'

export const nomeGestorSlice = createSlice({
  name: 'nomeGestor',
  initialState: {
    nomeGestor: ""
  },
  reducers: {
    setNomeGestor: (state, action) => {

      state.nomeGestor = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setNomeGestor } = nomeGestorSlice.actions

export const storeNomeGestor = configureStore({
  reducer: nomeGestorSlice.reducer
})