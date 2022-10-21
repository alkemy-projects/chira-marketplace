import Features from '../Features/Features'

interface Attribute {
	attribute_group_id: string
	attribute_group_name: string
	id: string
	name: string
	value_id: string
	value_name: string
	value_struct: { number: number; unit: string }
	values: [
		{
			id: string
			name: string
			struct: { number: number; unit: string }
		}
	]
}

export default function FeaturesPopUp({
	title,
	attributes,
	limit,
	setShowMoreFeatures,
}: {
	title: string
	attributes: Attribute[]
	limit: number | undefined
	setShowMoreFeatures: (value: boolean) => void
}) {
	return (
		<div className='features-pop-up'>
			<div className='features-pop-up-wrapper'>
				<button
					className='features-pop-up__close-button'
					onClick={() => setShowMoreFeatures(false)}
				>
					Cerrar
				</button>
				<div className='features-wrapper'>
					<Features
						title={title}
						attributes={attributes}
						limit={limit}
					/>
				</div>
			</div>
		</div>
	)
}
