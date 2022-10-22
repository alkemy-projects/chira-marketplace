import { useParams } from 'react-router-dom'
import { useProduct } from './useProduct'
import PicturesCarrousel from '../../components/PicturesCarrousel/PicturesCarrousel'
import FeaturesPopUp from '../../components/FeaturesPopUp/FeaturesPopUp'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import Features from '../../components/Features/Features'
import Picture from '../../components/Picture/Picture'
import Header from '../../components/Header/Header'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
import InnerImageZoom from "react-inner-image-zoom"
import Description from '../../components/Description/Description'

export default function Product() {
	const { id } = useParams()
	const {
		product,
		formatPrice,
		showMoreFeatures,
		setShowMoreFeatures,
		currentImage,
		setCurrentImage,
		productDescription,
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
							{windowWidth < 1151 && (
								<ProductInfo
									product={product}
									formatPrice={formatPrice}
								/>
							)}
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
							<Description description={productDescription} />
						</div>
						{windowWidth > 1151 && (
							<div className='right-column'>
								<ProductInfo
									product={product}
									formatPrice={formatPrice}
								/>
							</div>
						)}
					</div>
				</section>
			)}
		</>
	)
}
