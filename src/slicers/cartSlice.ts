import { createSlice } from '@reduxjs/toolkit'

interface CartProduct {
	id: string
	name: string
	price: number
	quantity: number
}

const initialState = JSON.parse(localStorage.getItem('cart') || '[]')
	? JSON.parse(localStorage.getItem('cart') || '[]')
	: ([] as CartProduct[])

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, action) => {
			const productToAdd = action.payload
			productToAdd.quantity = 1
			state.push(productToAdd)
			localStorage.setItem('cart', JSON.stringify(state))
		},
		updateQuantity: (state, action) => {
			const { id, event } = action.payload
			const productIndex = state.findIndex(product => product.id === id)
			event === '+'
				? state[productIndex].quantity++
				: state[productIndex].quantity--
			localStorage.setItem('cart', JSON.stringify(state))
		},
		clearCart: state => {
			localStorage.removeItem('cart')
			return initialState
		},
	},
})

export const { addProductToCart, clearCart, updateQuantity } = cartSlice.actions

export default cartSlice.reducer
