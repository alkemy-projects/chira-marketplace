import Slider from 'react-slick'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	initialSlide: 0,
	nextArrow: null,
	prevArrow: null,
	responsive: [
		{
			breakpoint: 1151,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}

interface Picture {
	url: string
}

export default function PicturesCarrousel({
	pictures,
}: {
	pictures: Picture[]
}) {
	return (
		<section className='pictures-carrousel'>
			<div className='pictures-wrapper'>
				<Slider {...settings}>
					{pictures.map((picture, index) => (
						<img
							className='picture__image'
							src={picture.url}
							alt={`Imágen de ${picture.url}`}
							key={index}
						/>
					))}
				</Slider>
			</div>
		</section>
	)
}
