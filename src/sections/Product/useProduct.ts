import { useEffect, useState } from 'react'
import { getProductById } from '../../Services/apiMercadoLibre'

export const useProduct = productId => {
	const [product, setProduct] = useState<any>(null)
	const [showMoreFeatures, setShowMoreFeatures] = useState(false)
	const [currentImage, setCurrentImage] = useState(undefined)

	useEffect(() => {
		getProductById(productId).then(product => {
			setProduct(product)
			setCurrentImage(product?.pictures[0].url)
		})
	}, [productId])

	useEffect(() => {
		console.log(currentImage)
	}, [currentImage])

	const formatPrice = price => {
		const formatter = new Intl.NumberFormat('es-AR', {
			style: 'currency',
			currency: 'ARS',
			minimumFractionDigits: 0,
		})
		return formatter.format(price)
	}

	return {
		product,
		formatPrice,
		showMoreFeatures,
		setShowMoreFeatures,
		currentImage,
		setCurrentImage,
	}
}
