import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from '../slicers/loaderSlice'

export const store = configureStore({
	reducer: {
		loader: loaderReducer,
		
	},
})
