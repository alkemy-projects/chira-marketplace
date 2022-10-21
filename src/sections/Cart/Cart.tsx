import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import { updateQuantity } from '../../slicers/cartSlice'
import { useCart } from './useCart'

export default function Cart() {
	const cart = useSelector((state: any) => state.cart)
	const {
		handleAddQuantity,
		handleRemoveQuantity,
		formatPrice,
		calculateTotal,
	} = useCart()

	return (
		<>
			<Header />
			<section className='cart'>
				<div className='cart-wrapper'>
					<h1 className='cart__title'>Carrito</h1>
					<ul className='cart-list'>
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
						<button className='summary__checkout'>Continuar compra</button>
						<button className='summary__clear'>Vaciar carrito</button>
					</div>
				</div>
			</section>
		</>
	)
}
