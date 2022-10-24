import { createSlice } from '@reduxjs/toolkit'
import { ProductInfo } from '../interfaces/Product.interface'

type initState = {
	cart: ProductInfo[]
	hasBought: boolean
}

const initialState = JSON.parse(localStorage.getItem('cart') || '[]')
	? JSON.parse(localStorage.getItem('cart') || '[]')
	: ([] as ProductInfo[][])

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, action) => {
			const productToAdd = action.payload

			console.log(productToAdd)
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
		removeProductFromCart: (state, action) => {
			const id = action.payload
			const productIndex = state.findIndex(product => product.id === id)
			state.splice(productIndex, 1)
			localStorage.setItem('cart', JSON.stringify(state))
		},
		clearCart: () => {
			localStorage.removeItem('cart')
			return initialState
		},
	},
})

export const {
	addProductToCart,
	clearCart,
	updateQuantity,
	removeProductFromCart,
} = cartSlice.actions

export default cartSlice.reducer
