import { createSlice, configureStore } from '@reduxjs/toolkit'

export const razaoSocialSlice = createSlice({
  name: 'razaoSocial',
  initialState: {
    razaoSocial: ""
  },
  reducers: {
    setRazaoSocial: (state, action) => {

      state.razaoSocial = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setRazaoSocial } = razaoSocialSlice.actions

export const storeRazaoSocial = configureStore({
  reducer: razaoSocialSlice.reducer
})