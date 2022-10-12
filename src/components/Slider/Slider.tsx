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
				breakpoint: 320,
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
					<Card
						title={phone.title}
						image={phone.thumbnail}
						price={phone.price}
						key={phone.id}
					/>
				))}
			</Slider>
		</>
	)
}
