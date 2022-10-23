import { ChangeEvent, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	LocationCard,
	ShipmentMethodCart,
	Header,
	ProductCart,
} from '../../components'
import { ProductInfo } from '../../interfaces/Product.interface'

export const Payment = () => {
	const { cart } = useSelector(
		(state: { cart: { cart: ProductInfo[] } }) => state.cart
	)
	const [isChecked, setIsChecked] = useState<'shipment' | 'local'>('shipment')
	const navigate = useNavigate()

	const totalProductCart = useMemo(
		() =>
			cart.reduce(
				(prevValue, currentValue) => prevValue + currentValue.price,
				0
			),
		[cart]
	)

	const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.name as 'shipment' | 'local')
	}

	const handleClick = () => {
		navigate('/purchase')
	}

	return (
		<>
			<Header />
			<div className='payment'>
				<div className='product-information'>
					<h2 className='title'>¿Cómo quieres recibir o retirar tu compra?</h2>
					<div>
						<h4>Domicilio</h4>
						<LocationCard />
					</div>
					<div>
						<h4>Recibir compra</h4>
						<ShipmentMethodCart
							startDate='Miercoles'
							endDate='Viernes'
							type='local'
							price='145'
							address='Mérida, Yucatán'
							discount='140'
							onCheck={onCheck}
							radioName='shipment'
							isChecked={isChecked === 'shipment'}
						/>
					</div>
					<div>
						<h4>Retirar compra</h4>
						<ShipmentMethodCart
							startDate='Miercoles'
							endDate='Viernes'
							type='address'
							price='145'
							address='C. 27 diagonal 317 - - Itzimna 108 - Mérida, Yucatán'
							discount='140'
							onCheck={onCheck}
							radioName='local'
							isChecked={isChecked === 'local'}
						/>
					</div>
				</div>
				<div className='product-payment'>
					<h2 className='product-payment-title'>Resumen de compra</h2>
					{cart.map(cartProduct => (
						<ProductCart
							key={cartProduct.id}
							product={cartProduct}
						/>
					))}
					<div className='total'>
						<p>Total:</p>
						<p>
							{totalProductCart.toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD',
							})}
						</p>
					</div>
					<button
						onClick={handleClick}
						className='button'
					>
						Finalizar compra
					</button>
				</div>
			</div>
		</>
	)
}
