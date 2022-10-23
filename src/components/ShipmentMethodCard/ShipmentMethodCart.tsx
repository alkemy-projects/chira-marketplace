import { ChangeEvent } from 'react'

type Props = {
	startDate: string
	endDate: string
	type: 'address' | 'local'
	price: string
	discount: string
	address: string
	onCheck: (e: ChangeEvent<HTMLInputElement>) => void
	radioName: string
	isChecked: boolean
}

export const ShipmentMethodCart = ({
	startDate,
	endDate,
	type,
	price,
	address,
	onCheck,
	radioName,
	isChecked,
}: Props) => {
	const shipmentType: Record<
		'address' | 'local',
		'domicilio' | 'paqueteria mas cercana'
	> = {
		address: 'domicilio',
		local: 'paqueteria mas cercana',
	}

	return (
		<article className='card-payment card-info'>
			<input
				type='radio'
				className='radio'
				onChange={onCheck}
				checked={isChecked}
				name={radioName}
			/>
			<div className='card-middle location-info'>
				<p>
					Llega entre el {startDate} y el {endDate} a tu {shipmentType[type]}
				</p>
				<p>{address}</p>
			</div>
			<div className='card-end'>
				<p className='cost'>
					{price}
					<span>54</span>
				</p>
				<p className='cost cost-discount'>
					{price}
					<span>54</span>
				</p>
			</div>
		</article>
	)
}
