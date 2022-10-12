export default function Card({
	title,
	image,
	price,
}: {
	title: string
	image: string
	price: string
}) {
	return (
		<article className='card'>
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
