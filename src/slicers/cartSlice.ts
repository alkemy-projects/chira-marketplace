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
			const productToAdd = action.payload
			productToAdd.quantity = 1
			state.push(productToAdd)
		},
		updateQuantity: (state, action) => {
			const { id, event } = action.payload
			const productIndex = state.findIndex(product => product.id === id)
			event === '+'
				? state[productIndex].quantity++
				: state[productIndex].quantity--
		},
		clearCart: state => initialState,
	},
})

export const { addProductToCart, clearCart, updateQuantity } = cartSlice.actions

export default cartSlice.reducer
