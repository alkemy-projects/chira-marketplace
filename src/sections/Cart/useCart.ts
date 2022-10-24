import { useDispatch, useSelector } from 'react-redux'
import { updateQuantity } from '../../slicers/cartSlice'
import { useState, useEffect } from 'react'

export const useCart = () => {
	const { cart: cartState } = useSelector((state: any) => state.cart)
	const [cart, setCart] = useState(
		cartState.length >= 1
			? cartState
			: JSON.parse(localStorage.getItem('cart') || '[]')
	)
	const dispatch = useDispatch()

	const handleAddQuantity = (availableQuantity, currentQuantity, productId) => {
		if (currentQuantity + 1 > availableQuantity)
			return alert('No puedes añadir mas items. Solo queda 1 disponible')
		dispatch(updateQuantity({ id: productId, event: '+' }))
	}

	const handleRemoveQuantity = (currentQuantity, productId) => {
		if (currentQuantity - 1 <= 0) return alert('No puedes quitar mas items')
		dispatch(updateQuantity({ id: productId, event: '-' }))
	}

	const formatPrice = price => {
		const formatter = new Intl.NumberFormat('es-AR', {
			style: 'currency',
			currency: 'ARS',
			minimumFractionDigits: 0,
		})
		return formatter.format(price)
	}

	const calculateTotal = cart => {
		const total = cart.reduce(
			(acc, product) => acc + product.price * product.quantity,
			0
		)
		return formatPrice(total)
	}

	useEffect(() => {
		if (cartState.length <= 0) return
		setCart(cartState)
	}, [cartState])

	return {
		handleAddQuantity,
		handleRemoveQuantity,
		formatPrice,
		calculateTotal,
		cart,
	}
}
