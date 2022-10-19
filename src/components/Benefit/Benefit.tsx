export default function Benefit({
	benefit,
	benefitDescription,
	icon,
}: {
	benefit?: string
	benefitDescription: string
	icon: string
}) {
	return (
		<li className='benefit'>
			<img
				className='benefit__icon'
				src={icon}
				alt={`Beneficio de ${benefit}`}
			/>
			<p className='benefit__text'>
				{benefit && <span className='benefit__text--bold'>{benefit}</span>}
				<span className='benefit__description'>{benefitDescription}</span>
			</p>
		</li>
	)
}
