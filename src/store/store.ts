import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from '../slicers/loaderSlice'
import resultsSlice from '../slicers/resultsSlice'
import searchSlice from '../slicers/searchSlice'
import cartSlice from '../slicers/cartSlice'

export const store = configureStore({
	reducer: {
		loader: loaderReducer,
		results: resultsSlice,
		search: searchSlice,
		cart: cartSlice,
	},
})
