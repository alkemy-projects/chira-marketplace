import { useParams } from 'react-router-dom'
import Features from '../../components/Features/Features'
import Header from '../../components/Header/Header'
import { useProduct } from './useProduct'

export default function Product() {
	const { id } = useParams()
	const { product, formatPrice, showMoreFeatures, setShowMoreFeatures } =
		useProduct(id)
	console.log(product)

	return (
		<>
			{showMoreFeatures && (
				<div className='features-pop-up'>
					<div className='features-pop-up-wrapper'>
						<button
							className='features-pop-up__close-button'
							onClick={() => setShowMoreFeatures(false)}
						>
							Cerrar
						</button>
						<div className='features-wrapper'>
							<Features
								title={product.title}
								attributes={product.attributes}
								limit={undefined}
							/>
						</div>
					</div>
				</div>
			)}
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
							<Features
								title={product.title}
								attributes={product.attributes}
								limit={5}
							/>
							<button
								className='show-more-features'
								onClick={() => setShowMoreFeatures(true)}
							>
								{' '}
								Ver más características{' '}
							</button>
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
