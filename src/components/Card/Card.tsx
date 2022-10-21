import { useNavigate } from 'react-router-dom'

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
	const navigate = useNavigate()

	return (
		<article
			className='card'
			onClick={() => navigate(`/product/${id}`)}
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
		</article>
	)
}
