import { configureStore } from '@reduxjs/toolkit'
import giftReducer from '../features/gift/giftSlice.js'

export const store = configureStore({
  reducer: {
    gift: giftReducer,
  },
})
