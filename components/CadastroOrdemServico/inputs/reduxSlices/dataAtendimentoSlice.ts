import { createSlice, configureStore } from '@reduxjs/toolkit'

export const dataAtendimentoSlice = createSlice({
  name: 'dataAtendimento',
  initialState: {
    dataAtendimento: ""
  },
  reducers: {
    setDataAtendimento: (state, action) => {
      state.dataAtendimento = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setDataAtendimento } = dataAtendimentoSlice.actions

export const storeDataAtendimento = configureStore({
  reducer: dataAtendimentoSlice.reducer
})