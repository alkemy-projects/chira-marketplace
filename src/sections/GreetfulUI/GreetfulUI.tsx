import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ProductInfo } from '../../interfaces/Product.interface'
import { clearCart } from '../../slicers/cartSlice'

export const GreetfulUI = () => {
	const { cart } = useSelector(
		(state: { cart: { cart: ProductInfo[] } }) => state.cart
	)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		dispatch(clearCart())
		navigate('/')
	}

	return (
		<section className='not-found'>
			<div className='images-container'>
				{cart.map(cartProduct => (
					<div
						key={cartProduct.id}
						className='image'
					>
						<img src={cartProduct.pictures[0].url} />
					</div>
				))}
				<h1 className='not-found__title purchase__title'>
					¡Gracias por tu compra!
				</h1>
				<button
					onClick={handleClick}
					className='button button-purchase'
				>
					Volver al home
				</button>
			</div>
		</section>
	)
}
