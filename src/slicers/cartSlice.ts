import { createSlice } from '@reduxjs/toolkit'
import { ProductInfo } from '../interfaces/Product.interface'

type initState = {
	cart: ProductInfo[]
	hasBought: boolean
}

const initialState: initState = {
	cart: JSON.parse(localStorage.getItem('cart') || '[]')
		? JSON.parse(localStorage.getItem('cart') || '[]')
		: ([] as ProductInfo[][]),
	hasBought: false,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, action) => {
			const productToAdd = action.payload
			productToAdd.quantity = 1
			state.cart.push(productToAdd)
			localStorage.setItem('cart', JSON.stringify(state.cart))
		},
		updateQuantity: (state, action) => {
			const { id, event } = action.payload
			const productIndex = state.cart.findIndex(product => product.id === id)
			event === '+'
				? state.cart[productIndex].quantity++
				: state.cart[productIndex].quantity--
			localStorage.setItem('cart', JSON.stringify(state.cart))
		},
		clearCart: state => {
			state = initialState
			localStorage.removeItem('cart')
			return initialState
		},
		setHasBought: (state, payload) => {
			state.hasBought = payload.payload
		},
	},
})

export const { addProductToCart, clearCart, updateQuantity, setHasBought } =
	cartSlice.actions

export default cartSlice.reducer
