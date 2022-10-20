import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const resultsSlice = createSlice({
	name: 'results',
	initialState,
	reducers: {
		setResults: (state, action) => {
			Object.assign(state, action.payload)
		},
		clearResults: state => initialState,
	},
})

export const { setResults, clearResults } = resultsSlice.actions

export default resultsSlice.reducer
