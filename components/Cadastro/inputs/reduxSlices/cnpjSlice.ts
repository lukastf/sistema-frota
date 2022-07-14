import { createSlice, configureStore } from '@reduxjs/toolkit'

export const cnpjSlice = createSlice({
  name: 'cnpj',
  initialState: {
    cnpj: ""
  },
  reducers: {
    setCnpj: (state, action) => {

        state.cnpj = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCnpj } = cnpjSlice.actions

//export default cnpjSlice.reducer

export const storeCnpj = configureStore({
    reducer: cnpjSlice.reducer
})