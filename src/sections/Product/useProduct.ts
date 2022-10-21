import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProductById } from '../../Services/apiMercadoLibre'

export const useProduct = productId => {
	const [product, setProduct] = useState<any>(null)
	const navigate = useNavigate()

	useEffect(() => {
		getProductById(productId).then(data => {
			if (!data) navigate('/notfound')
			setProduct(data)
		})
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
