import { configureStore } from '@reduxjs/toolkit'
import customReducer from './apiSlice'

export const store = configureStore({
  reducer: {
    space : customReducer
  }
})