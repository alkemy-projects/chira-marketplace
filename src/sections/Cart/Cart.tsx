import Header from '../../components/Header/Header'

export default function Cart() {
	return (
		<>
			<Header />
			<section className='cart'>
				<div className='cart-wrapper'>
					<h1 className='cart__title'>Carrito</h1>
				</div>
				<div className='delivery'></div>
			</section>
		</>
	)
}
