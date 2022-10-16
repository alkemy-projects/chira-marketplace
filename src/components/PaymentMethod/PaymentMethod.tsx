export default function PaymentMethod({
	title,
	description,
	url,
}: {
	title: string
	description: string
	url: string
}) {
	return (
		<div className='p-method'>
			<img
				className='mercado'
				src={url}
				alt=''
			/>
			<div className='descrip-cont'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}
