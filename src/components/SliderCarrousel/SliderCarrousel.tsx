import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from '../Card/Card'
import Arrow from '../Arrow/Arrow'
import { useEffect } from 'react'

export default function SliderCarrousel({
	products,
	title,
}: {
	products: any[]
	title: string
}) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		nextArrow: <Arrow />,
		prevArrow: <Arrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	useEffect(() => {
		if (window.document.body.clientWidth < 600) {
			setTimeout(() => {
				const slickTrack = document.querySelector('.slick-track') as any
				if (slickTrack)
					slickTrack.style.transform = 'translate3d(0px, 0px, 0px)'
			}, 100)
		}
	}, [])

	return (
		<section className='slider-carrousel'>
			<h2 className='slider-carrousel__title'>{title}</h2>
			<div className='slider-wrapper'>
				<Slider {...settings}>
					{products?.map(product => (
						<Card
							title={product.title}
							image={product.thumbnail}
							price={product.price}
							id={product.id}
							key={product.id}
						/>
					))}
				</Slider>
			</div>
		</section>
	)
}
