import { createSlice, configureStore } from '@reduxjs/toolkit'

export const idSlice = createSlice({
  name: 'id',
  initialState: {
    id: ""
  },
  reducers: {
    setId: (state, action) => {

      state.id = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setId } = idSlice.actions

export const storeId = configureStore({
  reducer: idSlice.reducer
})