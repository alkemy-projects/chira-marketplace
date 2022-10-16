import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from '../Card/Card'
import Arrow from '../Arrow/Arrow'

export default function SliderCarrousel({
	products,
	title,
}: {
	products: any[]
	title: string
}) {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 1,
		nextArrow: <Arrow />,
		prevArrow: <Arrow />,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<section  className='slider-carrousel'>
			<h2 className='slider-carrousel__title'>{title}</h2>
			<Slider {...settings}>
				{products?.map(product => (
					<Card
						title={product.title}
						image={product.thumbnail}
						price={product.price}
						key={product.id}
					/>
				))}
			</Slider>
		</section>
	)
}
