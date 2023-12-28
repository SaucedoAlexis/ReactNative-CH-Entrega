import { configureStore } from '@reduxjs/toolkit'
import dishesReducer from '../features/dishes/dishesSlice'

export default configureStore({
  reducer: {
    dishes:dishesReducer
  }
})