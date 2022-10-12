import { useState, useEffect } from 'react'
import PaymentMethods from '../../components/PaymentMethods/PaymentMethods'
import SliderCarrousel from '../../components/SliderCarrousel/SliderCarrousel'

export default function Home() {
	const [phones, setPhones] = useState<any[]>([])

	useEffect(() => {
		const bringPhones = async () => {
			const data = await fetch(
				'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055'
			)
			const resp = await data.json()

			setPhones(resp.results)
		}

		bringPhones()
	}, [])

	console.log(phones)

	return (
		<div className='home-cont'>
			<div className='header'>
				<h1>header</h1>
			</div>
			<PaymentMethods />
			<div className='carrcont'>
				<div className='carr'>
					<SliderCarrousel
						phones={phones}
						title='Teléfonos en oferta'
					/>
					<SliderCarrousel
						phones={phones}
						title='Televisores'
					/>
				</div>
			</div>
		</div>
	)
}
