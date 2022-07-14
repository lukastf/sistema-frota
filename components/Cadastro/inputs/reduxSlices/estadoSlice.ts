import { createSlice, configureStore } from '@reduxjs/toolkit'

export const estadoSlice = createSlice({
  name: 'estado',
  initialState: {
    estado: ""
  },
  reducers: {
    setEstado: (state, action) => {

      state.estado = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setEstado } = estadoSlice.actions

export const storeEstado = configureStore({
  reducer: estadoSlice.reducer
})