import { useDispatch } from 'react-redux'
import { updateQuantity } from '../../slicers/cartSlice'

export const useCart = () => {
	const dispatch = useDispatch()

	const handleAddQuantity = (availableQuantity, currentQuantity, productId) => {
		if (currentQuantity + 1 > availableQuantity) return
		dispatch(updateQuantity({ id: productId, event: '+' }))
	}

	const handleRemoveQuantity = (currentQuantity, productId) => {
		if (currentQuantity - 1 <= 0) return
		dispatch(updateQuantity({ id: productId, event: '-' }))
	}

	return { handleAddQuantity, handleRemoveQuantity }
}
