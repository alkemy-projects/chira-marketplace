export default function Category({
	title,
	icon,
}: {
	title: string
	icon: string
}) {
	return (
		<li className='category'>
			<img
				className='category__icon'
				src={icon}
				alt={`Icono de ${title}`}
			/>
			<span className='category__title'>{title}</span>
		</li>
	)
}
