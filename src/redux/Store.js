import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Slices/Cartslices'

export const store = configureStore({
  reducer: {
    Cart: cartSlice
  },
})

export default store;
