import { ProductInfo } from '../../interfaces/Product.interface'

type Props = {
	product: ProductInfo
}

export const ProductCart = ({ product }: Props) => {
	return (
		<div
			className='cart-product'
			key={product.id}
		>
			<img
				className='img'
				src={product.pictures[0].url}
			/>
			<p className='cart-product-description'>{product.title}</p>
			<p className='cart-product-price'>
				{product.price.toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD',
				})}
			</p>
		</div>
	)
}
