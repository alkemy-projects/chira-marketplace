import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'

export default function Cart() {
	const cart = useSelector((state: any) => state.cart)

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
									<h2 className='cart-item__name'>{product.title}</h2>
									<p className='cart-item__price'>
										$ {product.price * product.quantity}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className='delivery'></div>
			</section>
		</>
	)
}
