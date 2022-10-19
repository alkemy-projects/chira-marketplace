export default function Picture({
	picture,
	productTitle,
	setCurrentImage,
	currentImage,
}: {
	picture: string
	productTitle: string
	currentImage: string | undefined
	setCurrentImage: (value: any) => void
}) {
	return (
		<li
			className={`thumbnail ${currentImage === picture && 'active'}`}
			onMouseEnter={() => setCurrentImage(picture)}
		>
			<img
				className='thumbnail__image'
				src={picture}
				alt={`Imágen de ${productTitle}`}
			/>
		</li>
	)
}
