import shoppingCartIllustration from '../../assets/illustrations/shopping-cart.svg'

export default function Register() {
	return (
		<section className='register'>
			<div className='left'>
				<header className='register-header'>
					<h1 className='register__title'>Chira</h1>
					<h2 className='register__description'>
						Crea tu usuario y empieza a explorar todos nuestros productos.
					</h2>
					<p className='register__benefits'>
						¡Tienen envios gratis y es 100% online!
					</p>
				</header>
				<img
					className='register__illustration'
					src={shoppingCartIllustration}
					alt='Ilustración de un carrito de compras online'
				/>
			</div>
			<div className='right'></div>
		</section>
	)
}
