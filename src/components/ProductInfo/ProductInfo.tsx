import Benefit from '../Benefit/Benefit'
import prizeIcon from '../../assets/icons/prize-icon.svg'
import devolutionIcon from '../../assets/icons/devolution-icon.svg'
import protectIcon from '../../assets/icons/protect-icon.svg'

export default function ProductInfo({
	product,
	formatPrice,
}: {
	product: any
	formatPrice: (price: number) => string
}) {
	return (
		<>
			<div className='product__info'>
				<span className='product__condition'>
					{product.condition === 'new' ? 'Nuevo' : 'Usado'}
				</span>
				<span className='product__sold-quantity'>
					{product.sold_quantity} vendidos
				</span>
			</div>
			<h1 className='product__name'>{product.title}</h1>
			<h2 className='product__price'>{formatPrice(product.price)}</h2>
			<p className='product__available-quantity'>
				Cantidad: <span>{product.available_quantity} unidad</span>{' '}
				{product.available_quantity > 1
					? `(${product.available_quantity}) disponibles`
					: '¡Último disponible!'}
			</p>
			<button className='product__buy'>Comprar ahora</button>
			<button className='product__add-cart'>Agregar al carrito</button>
			<div className='benefits'>
				<ul className='benefits-list'>
					<Benefit
						icon={devolutionIcon}
						benefit='Devolución gratis'
						benefitDescription='Tenés 30 días desde que lo recibís.'
					/>
					<Benefit
						icon={protectIcon}
						benefit='Compra protegida'
						benefitDescription='recibí el producto que esperabas o te devolvemos tu dinero.'
					/>
					<Benefit
						icon={prizeIcon}
						benefitDescription={product.warranty}
					/>
				</ul>
			</div>
		</>
	)
}
