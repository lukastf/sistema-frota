import { createSlice, configureStore } from '@reduxjs/toolkit'

export const numeroOSSlice = createSlice({
  name: 'numeroOS',
  initialState: {
    numeroOS: ""
  },
  reducers: {
    setNumeroOS: (state, action) => {

      state.numeroOS = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setNumeroOS } = numeroOSSlice.actions

//export default cnpjSlice.reducer

export const storeNumeroOS = configureStore({
    reducer: numeroOSSlice.reducer
})