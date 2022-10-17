import { useEffect, useState } from 'react'
import { getProductById } from '../../Services/apiMercadoLibre'

export const useProduct = productId => {
	const [product, setProduct] = useState<any>(null)

	useEffect(() => {
		getProductById(productId).then(product => setProduct(product))
	}, [productId])

	const formatPrice = price => {
		const formatter = new Intl.NumberFormat('es-AR', {
			style: 'currency',
			currency: 'ARS',
			minimumFractionDigits: 0,
		})
		return formatter.format(price)
	}

	return { product, formatPrice }
}
