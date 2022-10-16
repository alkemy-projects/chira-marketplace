import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useProduct } from './useProduct'

export default function Product() {
	const { id } = useParams()
	const { product, formatPrice } = useProduct(id)
	console.log(product)

	return (
		<>
			<Header />
			{product && (
				<section className='product'>
					<div className='product-wrapper'>
						<div className='left-column'>
							<div className='gallery'>
								<img
									className='gallery-image'
									src={product.pictures[0].url}
									alt={`Imágen de ${product.title}`}
								/>
								<ul className='thumbnail-list'>
									{product.pictures.map((picture, index) => (
										<li
											key={index}
											className='thumbnail'
										>
											<img
												className='thumbnail__image'
												src={picture.url}
												alt={`Imágen de ${product.title}`}
											/>
										</li>
									))}
								</ul>
							</div>
							<div className='main-features'>
								<ul className='main-features-list'>
									{product.attributes.map(attribute => (
										<li
											key={attribute.id}
											className='attribute'
										>
											<span className='attribute__group-name'>
												{attribute.attribute_group_name}
											</span>
											<span className='attribute__value'>
												{attribute.value_name}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
						{product.main_features ? (
							<>
								<div className='center-column'>
									<div className='product__info'>
										<span className='product__condition'>
											{product.condition === 'new' ? 'Nuevo' : 'Usado'}
										</span>
										<span className='product__sold-quantity'>
											{product.sold_quantity} vendidos
										</span>
									</div>
									<h1 className='product__name'>{product.title}</h1>
									<h2 className='product__price'>
										{formatPrice(product.price)}
									</h2>
								</div>
								<div className='right-column'>
									<p className='product__available_quantity'>
										Cantidad: <span>{product.available_quantity} unidad</span>
									</p>
									<button className='product__buy'>Comprar</button>
								</div>
							</>
						) : (
							<div className='right-column'>
								<div className='product__info'>
									<span className='product__condition'>
										{product.condition === 'new' ? 'Nuevo' : 'Usado'}
									</span>
									<span className='product__sold-quantity'>
										{product.sold_quantity} vendidos
									</span>
								</div>
								<h1 className='product__name'>{product.title}</h1>
								<h2 className='product__price'>{formatPrice(product.price)}</h2>
								<button className='product__buy'>Comprar ahora</button>
							</div>
						)}
					</div>
				</section>
			)}
		</>
	)
}
