import { createSlice, configureStore } from '@reduxjs/toolkit'

export const enderecoSlice = createSlice({
  name: 'endereco',
  initialState: {
    endereco: ""
  },
  reducers: {
    setEndereco: (state, action) => {

      state.endereco = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setEndereco } = enderecoSlice.actions

export const storeEndereco = configureStore({
  reducer: enderecoSlice.reducer
})