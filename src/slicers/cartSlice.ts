import { createSlice } from '@reduxjs/toolkit'

interface CartProduct {
	id: string
	name: string
	price: number
	quantity: number
}

const initialState = [] as CartProduct[]

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, action) => {
			state.push(action.payload)
		},
		clearCart: state => initialState,
	},
})

export const { addProductToCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
