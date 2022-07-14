import { createSlice, configureStore } from '@reduxjs/toolkit'

export const telefoneSlice = createSlice({
  name: 'telefone',
  initialState: {
    telefone: ""
  },
  reducers: {
    setTelefone: (state, action) => {

      state.telefone = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setTelefone } = telefoneSlice.actions

export const storeTelefone = configureStore({
  reducer: telefoneSlice.reducer
})