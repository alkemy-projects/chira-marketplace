import { Link } from 'react-router-dom'

export default function Card({
	title,
	image,
	price,
	id,
}: {
	title: string
	image: string
	price: string
	id: string
}) {
	return (
		<Link
			className='card'
			to={`/product/${id}`}
		>
			<header className='card-header'>
				<img
					className='card__image'
					src={image}
					alt={`Imágen de ${title}`}
				/>
			</header>
			<section className='card-body'>
				<h2 className='card__title'>{title}</h2>
				<span className='card__price'>$ {price}</span>
			</section>
		</Link>
	)
}
