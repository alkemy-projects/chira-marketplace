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

export default function Features({
	title,
	attributes,
}: {
	title: string
	attributes: Attribute[]
}) {
	return (
		<div className='main-features'>
			<h2 className='main-features__title'>Características de {title}</h2>
			<ul className='main-features-list'>
				{attributes.map(attribute => (
					<li
						key={attribute.id}
						className='attribute'
					>
						<div className='attribute-name-wrapper'>
							<span className='attribute__name'>{attribute.name}</span>
						</div>
						<div className='attribute-value-wrapper'>
							<span className='attribute__value'>{attribute.value_name}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
