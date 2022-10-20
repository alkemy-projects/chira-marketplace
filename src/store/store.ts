import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from '../slicers/loaderSlice'
import resultsSlice from '../slicers/resultsSlice'

export const store = configureStore({
	reducer: {
		loader: loaderReducer,
		results: resultsSlice,
	},
})
