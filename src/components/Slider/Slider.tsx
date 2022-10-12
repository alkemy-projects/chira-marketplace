import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from '../Card/Card'
import Arrow from '../Arrow/Arrow'

export default function SliderCarrousel({ phones }: { phones: [any] }) {
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
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<>
			<Slider {...settings}>
				{phones?.map(phone => (
					<div
						className='card-carr'
						key={phone.id}
					>
						<img
							src={phone?.thumbnail}
							alt=''
						/>
						<h1>{phone?.title}</h1>
						<h3>{phone?.price}</h3>
					</div>
				))}
			</Slider>
		</>
	)
}
