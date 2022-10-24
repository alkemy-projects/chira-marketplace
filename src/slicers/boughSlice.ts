import { createSlice } from '@reduxjs/toolkit'

type initState = {
	hasBought: boolean
}

const initialState: initState = { hasBought: false }

export const cartSlice = createSlice({
	name: 'bought',
	initialState,
	reducers: {
		setHasBought: (state, { payload }) => {
			state.hasBought = payload
		},
	},
})

export const { setHasBought } = cartSlice.actions

export default cartSlice.reducer
