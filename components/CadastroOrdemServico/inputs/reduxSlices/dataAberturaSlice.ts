import { createSlice, configureStore } from '@reduxjs/toolkit'

export const dataAberturaSlice = createSlice({
  name: 'dataAbertura',
  initialState: {
    dataAbertura: ""
  },
  reducers: {

    setDataAbertura: (state, action) => {

      state.dataAbertura = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setDataAbertura } = dataAberturaSlice.actions

export const storeDataAbertura = configureStore({
  reducer: dataAberturaSlice.reducer
})