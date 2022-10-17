export const OfertCard = ({
	ofertText,
	image,
}: {
	ofertText: string
	image: string
}) => {
	return (
		<div className='ofertCardCont'>
			<div className='ofertText'>
				<p>{ofertText}</p>
				<h3>Hasta 25% off!</h3>
				<h3>y 6 cuotas sin interes</h3>
				<button>Ver mas</button>
			</div>
			<div className='ofertImg'>
				<img
					src={image}
					alt=''
				/>
			</div>
		</div>
	)
}
