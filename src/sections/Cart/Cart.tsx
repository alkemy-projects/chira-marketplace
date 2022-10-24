import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { clearCart, removeProductFromCart } from '../../slicers/cartSlice'
import { useCart } from './useCart'
import removeIcon from '../../assets/icons/remove-icon.svg'

export default function Cart() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const {
		handleAddQuantity,
		handleRemoveQuantity,
		formatPrice,
		calculateTotal,
		cart,
	} = useCart()

	const handlePaymentRedirect = () => {
		navigate('/payment')
	}

	return (
		<>
			<Header />
			<section className='cart'>
				<div className='cart-wrapper'>
					<h1 className='cart__title'>Carrito</h1>
					<ul className='cart-list'>
						{cart.length <= 0 && (
							<p className='cart-list__empty'>No hay productos en el carrito</p>
						)}
						{cart.map((product: any) => (
							<li
								className='cart-item'
								key={product.id}
							>
								<img
									className='cart-item__thumbnail'
									src={product.thumbnail}
									alt={product.title}
								/>
								<div className='cart-item-wrapper'>
									<div className='cart-item-data'>
										<h2 className='cart-item__name'>{product.title}</h2>
										<p className='cart-item__price'>
											{formatPrice(product.price * product.quantity)}
										</p>
									</div>
									<div className='quantity'>
										<button
											className='remove-product'
											onClick={() =>
												dispatch(removeProductFromCart(product.id))
											}
										>
											<img
												src={removeIcon}
												alt='Ícono de remover producto del carrito'
											/>
										</button>
										<button
											className='quantity__operation quantity__operation--rest'
											onClick={() =>
												handleRemoveQuantity(product.quantity, product.id)
											}
										>
											-
										</button>
										<input
											className='quantity__number'
											type='tel'
											value={product.quantity}
										/>
										<button
											className='quantity__operation quantity__operation--plus'
											onClick={() =>
												handleAddQuantity(
													product.available_quantity,
													product.quantity,
													product.id
												)
											}
										>
											+
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className='summary'>
					<h2 className='summary__title'>Resumen</h2>
					<div className='summary__wrapper'>
						<p className='summary__total'>
							<span>Total</span>: {calculateTotal(cart)}
						</p>
						<div className='summary-buttons'>
							<button
								className='summary__checkout'
								disabled={cart.length <= 0}
								onClick={handlePaymentRedirect}
							>
								Continuar compra
							</button>
							<button
								className='summary__clear'
								disabled={cart.length <= 0}
								onClick={() => {
									dispatch(clearCart())
									location.reload()
								}}
							>
								Vaciar carrito
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
