import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	getProductById,
	getDescriptionByProductId,
} from '../../Services/apiMercadoLibre'

export const useProduct = productId => {
	const [product, setProduct] = useState<any>(null)
	const [productDescription, setProductDescription] = useState('')
	const [showMoreFeatures, setShowMoreFeatures] = useState(false)
	const [currentImage, setCurrentImage] = useState(undefined)
	const navigate = useNavigate()

	useEffect(() => {
		getProductById(productId).then(data => {
			if (!data) navigate('/notfound')
			const product = data
			setProduct(product)
			setCurrentImage(product?.pictures[0].url)
		})
		getDescriptionByProductId(productId).then(description => {
			setProductDescription(description.plain_text)
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
		productDescription,
	}
}
