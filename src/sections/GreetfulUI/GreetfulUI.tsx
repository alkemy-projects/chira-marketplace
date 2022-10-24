import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { ProductInfo } from '../../interfaces/Product.interface'
import { setHasBought } from '../../slicers/boughSlice'
import { clearCart } from '../../slicers/cartSlice'

export const GreetfulUI = () => {
	const { cart, bought } = useSelector(
		(state: { cart: ProductInfo[]; bought: { hasBought: boolean } }) => state
	)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		dispatch(setHasBought(false))
		dispatch(clearCart())
		navigate('/')
	}

	return (
		<>
			{bought.hasBought ? (
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
			) : (
				<Navigate to='/' />
			)}
			)
		</>
	)
}
