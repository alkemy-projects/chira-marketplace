import { useParams } from 'react-router-dom'
import Benefit from '../../components/Benefit/Benefit'
import Features from '../../components/Features/Features'
import Header from '../../components/Header/Header'
import { useProduct } from './useProduct'
import prizeIcon from '../../assets/icons/prize-icon.svg'
import devolutionIcon from '../../assets/icons/devolution-icon.svg'
import protectIcon from '../../assets/icons/protect-icon.svg'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
import InnerImageZoom from 'react-inner-image-zoom'
import PicturesCarrousel from '../../components/PicturesCarrousel/PicturesCarrousel'
import FeaturesPopUp from '../../components/FeaturesPopUp/FeaturesPopUp'
import Picture from '../../components/Picture/Picture'

export default function Product() {
	const { id } = useParams()
	const {
		product,
		formatPrice,
		showMoreFeatures,
		setShowMoreFeatures,
		currentImage,
		setCurrentImage,
	} = useProduct(id)
	console.log(product)

	const windowWidth = window.innerWidth

	return (
		<>
			{showMoreFeatures && (
				<FeaturesPopUp
					title={product.title}
					attributes={product.attributes}
					limit={undefined}
					setShowMoreFeatures={setShowMoreFeatures}
				/>
			)}
			<Header />
			{product && (
				<section className='product'>
					<div className='product-wrapper'>
						<div className='left-column'>
							<div className='gallery'>
								{windowWidth > 1151 ? (
									<>
										<InnerImageZoom
											src={currentImage}
											zoomScale={1.5}
											zoomType='hover'
										/>
										<ul className='thumbnail-list'>
											{product.pictures.map((picture, index) => (
												<Picture
													picture={picture.url}
													productTitle={product.title}
													currentImage={currentImage}
													setCurrentImage={setCurrentImage}
													key={index}
												/>
											))}
										</ul>
									</>
								) : (
									<PicturesCarrousel pictures={product.pictures} />
								)}
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
								Ver más características
							</button>
						</div>
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
							<p className='product__available-quantity'>
								Cantidad: <span>{product.available_quantity} unidad</span>{' '}
								{product.available_quantity > 1
									? `(${product.available_quantity}) disponibles`
									: '¡Último disponible!'}
							</p>
							<button className='product__buy'>Comprar ahora</button>
							<button className='product__add-cart'>Agregar al carrito</button>
							<div className='benefits'>
								<ul className='benefits-list'>
									<Benefit
										icon={devolutionIcon}
										benefit='Devolución gratis'
										benefitDescription='Tenés 30 días desde que lo recibís.'
									/>
									<Benefit
										icon={protectIcon}
										benefit='Compra protegida'
										benefitDescription='recibí el producto que esperabas o te devolvemos tu dinero.'
									/>
									<Benefit
										icon={prizeIcon}
										benefitDescription={product.warranty}
									/>
								</ul>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	)
}
