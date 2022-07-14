import { createSlice, configureStore } from '@reduxjs/toolkit'

export const telefoneGestorSlice = createSlice({
  name: 'telefoneGestor',
  initialState: {
    telefoneGestor: ""
  },
  reducers: {
    setTelefoneGestor: (state, action) => {

      state.telefoneGestor = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setTelefoneGestor } = telefoneGestorSlice.actions

export const storeTelefoneGestor = configureStore({
  reducer: telefoneGestorSlice.reducer
})