export default function Description({ description }: { description: string }) {
	return (
		<section className='description'>
			<h2 className='description__title'>Descripción</h2>
			<p className='description__text'>{description}</p>
		</section>
	)
}
